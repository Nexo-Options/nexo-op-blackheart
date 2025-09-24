import BN from 'utils/BN'

const tokens = {
  NEXO: {
    name: 'Nexo',
    symbol: 'NEXO',
    decimals: 18
  },
  sNEXO: {
    name: 'Staked Nexo',
    symbol: 'sNEXO',
    decimals: 18
  },
  WBTC: {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    decimals: 8
  },
  ETH: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  },
  WHBTC: {
    name: 'Nexo Protected Bitcoin',
    symbol: 'WHBTC',
    decimals: 8
  },
  WHETH: {
    name: 'Nexo Protected Ether',
    symbol: 'WHETH',
    decimals: 8
  }
}

export default {
  namespaced: true,
  state() {
    return {
      ...tokens,
      balance: {
        NEXO: null,
        sNEXO: null,
        ETH: null,
        WBTC: null
      }
    }
  },
  mutations: {
    setBalance(state, { amount, token }) {
      state.balance[token] = amount
    }
  },
  actions: {
    async updateBalances({
      commit,
      rootState: {
        connection: { provider, contracts, accounts: [account] }
      }
    }) {
      contracts.NEXO.balanceOf(account)
        .then(amount => commit('setBalance', { token: 'NEXO', amount }))
      contracts.Staking.balanceOf(account)
        .then(amount => commit('setBalance', { token: 'sNEXO', amount }))
      contracts.WBTC.balanceOf(account)
        .then(amount => commit('setBalance', { token: 'WBTC', amount }))
      provider.getBalance(account)
        .then(amount => commit('setBalance', { token: 'ETH', amount }))
    }
  }
}
