<script>
import { utils } from 'ethers'
import { toBN } from 'utils/BN'

export default {
  props: {
    value: {
      type: Object,
      default: null
    },
    placeholder: {
      type: String,
      default: 'loading...'
    },
    decimals: {
      type: Number,
      default: 18
    },
    places: {
      type: Number,
      default: 4
    }
  },
  computed: {
    formattedValue() {
      if (!this.value) return null
      try {
        const bn = toBN(this.value)
        return utils.formatUnits(bn, this.decimals).toString().slice(0, this.places + 2) // +2 accounts for "0."
      } catch (e) {
        return null
      }
    }
  }
}
</script>

<template lang="pug">
span(v-if="formattedValue") {{ formattedValue }} #[slot]
span(v-else) {{ placeholder }}
</template>
