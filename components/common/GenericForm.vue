<template>
  <div>
    <h2 class="mb-4 font-bold text-center text-22 font-nexa-bold sm:text-left">
      {{ label }}
    </h2>
    <form class="flex flex-wrap items-end justify-between">
      <div
        v-for="(field, index) in fields"
        :key="index"
        class="w-full md:w-1/2"
      >
        <RadioInput
          v-if="field.type === 'radio'"
          v-model="formData[field.name]"
          :init-value="formData[field.name]"
          :label="field.label"
          :name="field.name"
          :buttons="field.buttons"
        />
        <Input
          v-else
          v-model="formData[field.name]"
          :init-value="formData[field.name]"
          :placeholder="field.placeholder"
          :name="field.name"
          :label="field.label"
          :type="field.type"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    formData: {
      type: Object,
      default: () => {},
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedContainerClasses() {
      return `${this.defaultMargin ? 'mb-8' : ''} ${this.containerClasses}`
    },
  },
}
</script>

<style></style>
