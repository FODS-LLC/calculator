<template>
  <div>
    <Modal />
  </div>
</template>

<script>
import Modal from '../components/common/Modal.vue'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      projectRepForm: {
        formData: {},
        label: 'Project Reciepent',
        fields: [
          {
            type: 'radio',
            label: 'Entrance Length',
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
              },
              {
                label: 'Bi_Monthly',
                value: 'bi_monthly',
              },
              {
                label: 'Quarterly',
                value: 'quarterly',
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
            placeholder: 'Type ammount (USD)',
          },
        ],
        redirect: 'results',
      },
      salesRepForm: {
        formData: {},
        label: 'Sales Representative (optional)',
        fields: [
          {
            type: 'radio',
            label: 'Entrance Length',
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
              },
              {
                label: 'Bi_Monthly',
                value: 'bi_monthly',
              },
              {
                label: 'Quarterly',
                value: 'quarterly',
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
            placeholder: 'Type ammount (USD)',
          },
        ],
        redirect: 'results',
      },
    }
  },
  methods: {
    submit() {
      this.$router.push({
        path: 'input',
        query: { formData: JSON.stringify(this.Form.formData) },
      })
    },
    exit() {
      this.$router.push({
        path: 'input',
        query: {},
      })
    },
  },
}
</script>

<style></style>
