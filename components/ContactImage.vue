<template>
  <div class="flex justify-center items-center">
    <div class="mr-6">
      <img :src="img" :alt="imageAlt" class="rounded-full h-48 w-48" />
    </div>
    <div class="w-48 flex flex-col justify-center">
      <p>FODS</p>
      <p>{{ name }}</p>
      <p>{{ number }}</p>
      <p>{{ email }}</p>
      <p>{{ address }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageAlt() {
      return `${this.name}${this.name ? "'s " : ''}Contact Image`
    },
  },
}
</script>

<style></style>
