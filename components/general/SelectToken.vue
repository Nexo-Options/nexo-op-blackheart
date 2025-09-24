<script>
export default {
  data() {
    return {
      tokens: [
        {
          symbol: "ETH",
          name: "Ether",
          decimals: 18,
          image: "https://example.com/eth.png"
        },
        {
          symbol: "WBTC",
          name: "Wrapped Bitcoin",
          decimals: 8,
          image: "https://example.com/wbtc.png"
        }
      ]
    }
  },
  methods: {
    selectToken(token) {
      this.$emit("select", token)
    }
  }
}
</script>

<template lang="pug">
.overlay.dyn
  .close-pop-up(@click="$emit('close')")
  .overlay__content
    .overlay__header Select a token
    .select-box
      input.select-box__search(type="text" placeholder="Search name or paste address...")
      .select-box__tokens
        .select-box-token(
          v-for="token in tokens"
          :key="token.symbol"
          :class="token.symbol"
          @click="selectToken(token)"
        )
          img(:src="token.image" :alt="token.symbol" width="20" height="20")
          span {{ token.symbol }} - {{ token.name }}
</template>
