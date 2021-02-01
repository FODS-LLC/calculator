<template>
  <div class="grid w-full grid-cols-header">
    <img
      src="/logo/FODS-LOG2O.png"
      alt="Logo"
      class="col-span-1 mx-2 my-6 w-logo cursor-pointer"
      @click="goToHomePage()"
    />
    <div class="self-center xl:m-auto sm:ml-0 sm:mr-auto col-span-2 text-center">
      <h1 class="font-bold font-bebas-neue-bold text-mid-grey text-40 sm:text-64 lg:text-96">
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
