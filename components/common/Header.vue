<template>
  <div class="flex w-full py-4">
    <img
      src="/logo/FODS-LOG2O.png"
      alt="Logo"
      class="object-contain mx-4 my-auto w-logo h-full cursor-pointer"
      @click="goToHomePage()"
    />
    <div class="self-center xl:m-auto my-auto sm:ml-0 sm:mr-auto text-center sm:text-left">
      <h1 class="font-bold font-bebas-neue-bold leading-0 pt-20px text-mid-grey text-40 sm:text-64 xl:text-96 sm:leading-1">
        ROI Calculator
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToHomePage() {
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

<style></style>
