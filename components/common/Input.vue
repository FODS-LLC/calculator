<template>
  <div :class="computedContainerClasses" class="w-full sm:w-5/6">
    <label :for="name"
      ><span class="block mb-1 font-bold">{{ label }}:</span></label
    >
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      class="w-full form-input bg-input-gray"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="error" class="my-1">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: String,
      default: '',
    },
    defaultMargin: {
      type: Boolean,
      default: true,
    },
    containerClasses: {
      type: String,
      default: '',
    },
    initValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.$props.initValue,
    }
  },
  computed: {
    computedContainerClasses() {
      return `${this.defaultMargin ? 'mb-8' : ''} ${this.containerClasses}`
    },
  },
}
</script>

<style></style>
