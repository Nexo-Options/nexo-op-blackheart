import { createRouter, createWebHashHistory } from 'vue-router'

import SwapWrap from '../components/swap-wrap/SwapWrap.vue'
import Swap from '../components/swap-wrap/Swap.vue'
import Wrap from '../components/swap-wrap/Wrap.vue'
import Holdings from '../components/holdings/Holdings.vue'
import Stake from '../components/stake/Stake.vue'

import SStake from '../components/stake/SStake.vue'
import SUnstake from '../components/stake/SUnstake.vue'
import LP from '../components/LP.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // Example landing page:
    // { path: '', component: LP },
    // { path: '', redirect: '/swap-wrap/wrap?from=ETH&to=WHETH' },

    // Swap & Wrap section
    // {
    //   path: '/swap-wrap',
    //   component: SwapWrap,
    //   children: [
    //     {
    //       path: 'swap',
    //       component: Swap,
    //       props: route => ({
    //         buy: route.query.buy,
    //         sell: route.query.sell
    //       })
    //     },
    //     {
    //       path: 'wrap',
    //       component: Wrap,
    //       props: route => ({
    //         from: route.query.from,
    //         to: route.query.to
    //       })
    //     }
    //   ]
    // },

    // Holdings
    // {
    //   path: '/holdings',
    //   component: Holdings,
    //   props: { currentRouter: 'holdings' }
    // },

    // Stake section
    {
      path: '/stake',
      component: Stake,
      children: [
        // { path: 'stake', component: SStake },
        { path: 'unstake', component: SUnstake }
      ]
    },

    // Catch-all fallback
    { path: '/:pathMatch(.*)*', redirect: '/stake/unstake' }
  ]
})
