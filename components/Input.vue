<script>
import Web3Input from './general/Web3Input.vue'
import BigNumber from './general/BigNumber.vue'
import SelectToken from './general/SelectToken.vue'

export default {
  name: "TokenInput",
  emits: ['update:modelValue'],
  props: {
    title: {
      type: String,
      default: ''
    },
    token: {
      type: Object,
      required: true
    },
    max: {
      type: [Boolean, Function],
      default: undefined
    },
    selector: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    noBalance: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectorPopUp: null
    }
  },
  computed: {
    balance() {
      return this.$store.state.tokens.balance[this.token.symbol]
    },
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  components: {
    Web3Input,
    BigNumber,
    SelectToken
  },
  methods: {
    setMax() {
      const balance =
        typeof this.max === 'function' ? this.max(this.balance) : this.balance
      this.$emit('update:modelValue', balance)
    }
  }
}
</script>

<template lang="pug">
.input-box
  .input-box__top
    .input-box-top__text {{ title }}
    .input-box-top__text(
      v-if="noBalance === false && $store.getters.account"
    )
      | Balance:
      big-number(:value="balance" :decimals="token.decimals")
  .input-box__bottom
    web3-input.input(
      v-model="value"
      placeholder="0.0"
      :decimals="token.decimals"
    )
    .input-box__max(v-if="max !== undefined" @click="setMax") MAX
    .input-box__token(
      :class="{ 'width-max': max, 'with-selector': selector }, token.symbol"
      @click="selector ? (selectorPopUp = true) : (selectorPopUp = null)"
    ) {{ token.symbol }}
  select-token(:class="{ open: selectorPopUp }" @close="selectorPopUp = null")
</template>
