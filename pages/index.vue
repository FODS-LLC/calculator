<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col items-center w-10/12 mx-auto">
        <Header />
        <div class="pt-2">
          <div class="pb-4">
            <div class="flex">
              <div class="flex flex-col max-w-380">
                <img
                  :src="image"
                  alt="truck"
                  class="hidden w-full rounded-md h-main-content object-contain xl:block"
                />
                <p class="hidden text-center xl:block w-9/12 m-auto">FODS Recommended Alternative Layout</p>
              </div>
              <div
                class="w-full px-8 pt-8 bg-white shadow-xl xl:min-w-600px xxl:max-w-full min-h-main-content"
              >
                <GenericForm
                  :form-data="Form.formData"
                  :label="Form.label"
                  :fields="Form.fields"
                  :redirect="Form.redirect"
                />
              </div>
            </div>
          </div>
          <ButtonComp
            label="Calculate"
            background-color="bg-energy-yellow"
            border-color="border-transparent"
            class="block px-20 py-4 mx-auto mt-3 uppercase"
            @buttonPress="submit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenericForm from '../components/common/GenericForm.vue'
import ButtonComp from '../components/common/ButtonComp.vue'
import Header from '../components/common/Header.vue'

export default {
  components: {
    GenericForm,
    ButtonComp,
    Header,
  },
  data() {
    return {
      Form: {
        formData: { ...this.$store.state.formData },
        label: 'Enter the dimensions and costs for your average rock construction entrance.',
        fields: [
          {
            type: 'radio',
            label: 'Rock Entrance Length',
            name: 'entrance_length',
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
          {
            type: 'text',
            label: 'Install Cost',
            name: 'install_cost',
            placeholder: 'Type ammount (USD)',
          },
          {
            type: 'text',
            label: 'Refresh Cost',
            name: 'refresh_cost',
            placeholder: 'Type ammount (USD)',
          },
          {
            type: 'radio',
            label: 'Refresh Frequency',
            name: 'refresh_frequency',
            buttons: [
              {
                label: 'Monthly',
                value: 'monthly',
                widthClass: 'w-22 sm:w-24',
              },
              {
                label: 'Bi-Monthly',
                value: 'bi-monthly',
                widthClass: 'w-22 sm:w-24',
              },
              {
                label: 'Quarterly',
                value: 'quarterly',
                widthClass: 'w-22 sm:w-24',
              },
            ],
          },
          {
            type: 'text',
            label: 'Removal Cost',
            name: 'removal_cost',
            placeholder: 'Type ammount (USD)',
          },
          {
            type: 'text',
            label: 'Remediation Cost',
            name: 'remediation_cost',
            placeholder: 'Type ammount (USD)',
          },
          {
            type: 'text',
            label: 'Length of Project',
            name: 'length_of_project',
            placeholder: 'Type months quantity',
          },
        ],
        redirect: 'results',
      },
    }
  },
  computed: {
    image() {
      const items = [
        '/drawings/Yellow Outlines/1x4Y.jpg',
        '/drawings/Yellow Outlines/1x5TY.jpg',
        '/drawings/Yellow Outlines/1X7TY.jpg',
      ]
      const item = this.$store.state.formData.entrance_length
      if (item === '70' || item === '50') {
        return items[1]
      }
      if (item === '100') {
        return items[2]
      }
      return items[0]
    },
  },
  methods: {
    submit() {
      this.Form.formData.pdfurl = ''
      this.$store.commit('updateForm', this.Form.formData)
      //this.$store.commit('updateField', ('entrance_length', this.Form.formData.entrance_length.value) )
      //this.$store.commit('updateField', ('refresh_frequency', this.Form.formData.refresh_frequency.value) )
      this.$axios
        .post('https://getfods-api.herokuapp.com/entries', {
          ...this.$store.state.formData,
        })
        .then((res) => {
          this.$store.commit('setId', res.data.id)
          this.$router.push({
            path: `output?id=${this.$store.state.id}`,
          })
        })
    },
  },
}
</script>

<style></style>
