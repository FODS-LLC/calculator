<template>
  <div class="flex items-center justify-center">
    <div class="font-bold font-nexa-bold w-360">
      <p class="mb-4">
        Break even point based on national average installation and maintenance
        cost.
      </p>
      <div class="flex content-center">
        <!-- <div> -->
        <p class="pt-5 font-bebas-neue-bold text-160 leading-160">ROI</p>
        <!-- </div> -->
        <div
          class="relative flex flex-col justify-center px-4 ml-6 text-center bg-energy-yellow h-160 rounded-21"
        >
          <p class="relative text-115 top-4">
            {{ timeEstimate.number }}
          </p>
          <p class="relative text-30 bottom-11">
            {{ timeEstimate.unit }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    days: {
      type: Number,
      default: undefined,
    },
    months: {
      type: Number,
      default: undefined,
    },
    years: {
      type: Number,
      default: undefined,
    },
  },
  computed: {
    timeEstimate() {
      return {
        number: this.years || this.months || this.days || 0,
        unit: this.years
          ? 'years'
          : this.months
          ? 'months'
          : this.days
          ? 'days'
          : 'days',
      }
    },
  },
}
</script>

<style></style>
