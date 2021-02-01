<template>
  <div :class="computedContainerClasses" class="sm:w-5/6 w-full">
    <p class="block mb-3 font-bold text-center sm:text-left">{{ label }}:</p>
    <div class="flex justify-start space-x-2-disable">
      <div v-for="(button, index) in buttons" :key="index" class="flex-grow flex-shrink-0 relative mt-2 mr-2">
        <label
          :for="button.label"
          :class="`text-center w-full px-3 rounded-sm duration-100 py-3 font-bold font-nexa-bold cursor-pointer whitespace-no-wrap text-15px hover:bg-dove-gray hover:text-white inline-block ${
            selected === button.value
              ? 'bg-dove-gray text-white'
              : 'bg-gray-100 text-input-text-gray'
          }`"
        >
          <span>{{ button.label }}</span>
        </label>
        <input
          :id="button.label"
          v-model="selected"
          type="radio"
          :value="button.value"
          :name="name"
          class="hidden"
          @click="onClick"
        />
        <span v-if="error" class="my-1">{{ error }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => {},
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
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
      selected: '',
    }
  },
  computed: {
    computedContainerClasses() {
      return `${this.defaultMargin ? 'mb-8' : ''} ${this.containerClasses}`
    },
  },
  mounted() {
    // set the default value
    this.selected = this.$props.initValue
  },
  methods: {
    onClick(event) {
      this.$store.commit('updateField', {
        field: this.name,
        value: event.target.value,
      })
    },
  },
}
</script>

<style></style>
