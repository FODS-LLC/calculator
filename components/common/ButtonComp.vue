<template>
  <button
    :class="computedContainerClasses"
    class="text-center border border-solid w-284 button-border hover:shadow-xl active:shadow h-60 font-nexa-bold"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'bg-white',
    },
    borderColor: {
      type: String,
      default: 'border-black',
    },
    defaultMargin: {
      type: Boolean,
      default: true,
    },
    containerClasses: {
      type: String,
      default: '',
    },
    click: {
      type: Function,
      default: null,
    },
  },
  computed: {
    computedContainerClasses() {
      return `${this.defaultMargin ? 'mb-8' : ''} ${this.containerClasses} ${
        this.backgroundColor
      } ${this.borderColor}`
    },
  },
  methods: {
    onClick(event) {
      if (this.click) {
        this.click()
        return
      }
      this.$emit('buttonPress', { event, name: this.name })
    },
  },
}
</script>

<style></style>
