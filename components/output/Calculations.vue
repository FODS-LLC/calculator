<template>
  <div class="relative z-30">
    <script src="https://github.com/devongovett/pdfkit/releases/download/v0.10.0/pdfkit.standalone.js"></script>
    <div class="flex flex-col items-center justify-center mx-auto">
      <div
        :class="`flex flex-wrap justify-center w-full bg-white ${
          !generating ? 'sm:w-10/12 mx-auto' : ''
        }`"
      >
        <Header />
        <RoiEstimate :months="roi" class="w-full col-span-1 border md:w-1/2" />
        <Table
          :headers="TableCost.tableHeader"
          :rows="costSavings"
          :title="TableCost.title"
          :description="TableCost.description"
          class="w-full col-span-1 p-4 border md:w-1/2"
        />
        <Table
          :headers="TableAccel.tableHeader"
          :rows="accelerator"
          :title="TableAccel.title"
          :description="TableAccel.description"
          class="w-full col-span-1 p-4 border md:w-1/2"
        />

        <div class="w-full col-span-1 p-4 overflow-hidden border md:w-1/2">
          <img
            src="/pictures/Bottom-Right-Box/5.jpg"
            alt="Demo of Product"
            class="overflow-hidden"
          />
        </div>
      </div>
      <div class="flex flex-col my-6 sm:block">
        <template v-if="!generating">
          <Modal class="inline-block mx-3" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    generating: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      RadioInput: {
        name: 'entrance-length',
        label: 'Entrance Length',
        buttons: [
          {
            label: "35'",
            value: '35',
          },
          {
            label: "50'",
            value: '50',
          },
          {
            label: "70'",
            value: '70',
          },
          {
            label: "100'",
            value: '100',
          },
        ],
      },
      TableAccel: {
        title: 'Accelerator Table',
        description:
          'FODS cost savings really add up when you move the mats either within the project or to new projects.',
        tableHeader: ['Accelerator', '3 Years', '5 Years', '10 Years'],
        tableRows: [
          ['1x/year', '10,000 USD', '50,000 USD', '100,000 USD'],
          ['3x/year', '30,000 USD', '150,000 USD', '300,000 USD'],
          ['5x/year', '50,000 USD', '250,000 USD', '500,000 USD'],
          ['10x/year', '100,000 USD', '500,000 USD', '1,000,000 USD'],
        ],
      },
      TableCost: {
        title: 'FODS Cost Savings Table',
        description: '',
        tableHeader: ['Time', 'Savings'],
        tableRows: [
          ['1x/year', '10,000 USD', '50,000 USD', '100,000 USD'],
          ['3x/year', '30,000 USD', '150,000 USD', '300,000 USD'],
          ['5x/year', '50,000 USD', '250,000 USD', '500,000 USD'],
          ['10x/year', '100,000 USD', '500,000 USD', '1,000,000 USD'],
        ],
      },
      ContactImage: {
        img: '/pictures/Sales_Rep/1.jpg',
        name: 'Adam',
        number: '+1(303) 395-1069',
        email: 'info@getfods.com',
        address: '98 Inverness Dr E #350 Englewood, CO 80112',
      },
      ROIEstimate: {
        years: 14,
        months: 10,
        days: 100,
      },
      ButtonPrint: {
        label: 'Print',
        backgroundColor: 'bg-white',
        borderColor: 'border-charade',
        defaultMargin: false,
      },
      ButtonEmail: {
        label: 'Email',
        backgroundColor: 'bg-energy-yellow',
        borderColor: 'border-transparent',
        defaultMargin: false,
        class: 'ml-2',
      },
    }
  },
  computed: {
    computedClasses() {
      if (this.generating) {
        return 'flex flex-wrap justify-center w-full'
      }
      return 'flex flex-wrap justify-center w-full bg-white sm:w-10/12'
    },
    matsNumber() {
      const length = parseInt(this.$store.state.formData.entrance_length)
      if (length === 35) return 4
      else if (length === 70 || length === 50) return 6
      return 8
    },
    costsFODS() {
      return 2600 * this.matsNumber
    },
    refreshFrequencyMonths() {
      const refreshFrequency = this.$store.state.formData.refresh_frequency
      if (refreshFrequency === 'monthly') return 1
      else if (refreshFrequency === 'bi-monthly') return 2
      return 3
    },
    rocksCost() {
      const installCost = parseInt(this.$store.state.formData.install_cost)
      const refreshCost = parseInt(this.$store.state.formData.refresh_cost)
      const projectLength = parseInt(
        this.$store.state.formData.length_of_project
      )
      const removalCost = parseInt(this.$store.state.formData.removal_cost)
      const remidiationCost = parseInt(
        this.$store.state.formData.remediation_cost
      )
      const dailyComponent =
        refreshCost * (projectLength / this.refreshFrequencyMonths)
      return installCost + dailyComponent + removalCost + remidiationCost
    },
    roi() {
      const projectLength = parseInt(
        this.$store.state.formData.length_of_project
      )
      return Math.floor(this.costsFODS / (this.rocksCost / projectLength))
    },
    costSavings() {
      const projectLength = parseInt(
        this.$store.state.formData.length_of_project
      )
      const year5 = (Math.floor(this.costsFODS - (this.rocksCost / projectLength) * 60) || 0)

      return [
        [
          '3 Years',
          `${
            -Math.floor(
              this.costsFODS - (this.rocksCost / projectLength) * 36
            ) || 0
          } USD`,
        ],
        [
          '5 Years',
          `${year5.toLocaleString()} USD`,
        ],
        [
          '10 Years',
          `${
            -Math.floor(
              this.costsFODS - (this.rocksCost / projectLength) * 120
            ).toFixed(2) || 0
          } USD`,
        ],
      ]
    },
    rocksMoveCost() {
      const installCost = parseInt(this.$store.state.formData.install_cost)
      const removalCost = parseInt(this.$store.state.formData.removal_cost)
      const remidiationCost = parseInt(
        this.$store.state.formData.remediation_cost
      )
      return installCost + remidiationCost + removalCost
    },
    accelerator() {
      const projectLength = parseInt(
        this.$store.state.formData.length_of_project
      )
      return [
        [
          '1x / year',
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 3 -
                (this.rocksCost / projectLength) * 36
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 5 -
                (this.rocksCost / projectLength) * 60
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 10 -
                (this.rocksCost / projectLength) * 120 // this is the line
            ).toFixed(2) || 0
          } USD`,
        ],
        [
          '3x / year',
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 9 -
                (this.rocksCost / projectLength) * 36
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 15 -
                (this.rocksCost / projectLength) * 60
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 30 -
                (this.rocksCost / projectLength) * 120
            ).toFixed(2) || 0
          } USD`,
        ],
        [
          '5x / year',
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 15 -
                (this.rocksCost / projectLength) * 36
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 25 -
                (this.rocksCost / projectLength) * 60
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 50 -
                (this.rocksCost / projectLength) * 120
            ).toFixed(2) || 0
          } USD`,
        ],
        [
          '10x / year',
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 30 -
                (this.rocksCost / projectLength) * 36
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 50 -
                (this.rocksCost / projectLength) * 60
            ).toFixed(2) || 0
          } USD`,
          `${
            -Math.floor(
              this.costsFODS -
                this.rocksMoveCost * 100 -
                (this.rocksCost / projectLength) * 120
            ).toFixed(2) || 0
          } USD`,
        ],
      ]
    },
  },
}
</script>

<style></style>