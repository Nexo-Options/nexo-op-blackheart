export default {
  namespaced: true,
  state: () => ({
    bind: null
  }),
  mutations: {
    set: (state, value) => {
      state.bind = value
    }
  },
  actions: {
    error({ commit }, { title, description }) {
      commit('set', {
        title: title || 'Error',
        description,
        type: 'error',
        actionText: 'Done'
      })
    },
    async process({ commit }, { txPromise, description }) {
      // Initial confirmation step
      commit('set', {
        description,
        title: 'Please confirm your transaction',
        type: 'waiting'
      })

      try {
        // Ask wallet to send transaction
        const tx = await txPromise

        // Waiting for network confirmation
        commit('set', {
          title: `Waiting for network confirmation... (${description})`,
          description: `<a class="hash" target="_blank" href="https://etherscan.io/tx/${tx.hash}">${tx.hash}</a>`,
          type: 'waiting'
        })

        // Await mining confirmation
        const receipt = await tx.wait()

        // Optional small delay (UX buffer for block propagation)
        await new Promise(resolve => setTimeout(resolve, 3000))

        // Success
        commit('set', {
          title: 'Transaction was successfully confirmed!',
          type: 'done',
          description: `<a class="hash" target="_blank" href="https://etherscan.io/tx/${tx.hash}">${tx.hash}</a>`,
          actionText: 'Done'
        })

        return receipt
      } catch (error) {
        // Error state
        commit('set', {
          title: 'Error',
          description: error.message || 'Transaction failed',
          type: 'error',
          actionText: 'Done'
        })
        throw error
      }
    }
  }
}
