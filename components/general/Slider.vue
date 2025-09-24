<script>
import VueformSlider from '@vueform/slider'

export default {
  name: "PeriodSlider",
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      _slider_params: {
        format: x => (x === 1 ? `1 day` : `${x.toFixed()} days`),
        min: 14,
        max: 28,
        step: 1,
        tooltips: false
      }
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    hours() {
      return this.value * 24
    }
  },
  components: { VueformSlider }
}
</script>

<template lang="pug">
.input-box(style="margin-top: 20px")
  .input-box__top
    .input-box-top__text Period
    .input-box-top__text {{ value }} days ({{ hours }} hours)
  .input-box__bottom
    vueform-slider(
      v-model="value"
      v-bind="_slider_params"
    )
</template>
