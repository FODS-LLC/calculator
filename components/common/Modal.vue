<template>
  <div>
    <transition name="fade">
      <div
        v-if="visible"
        class="fixed inset-0 flex items-center justify-center modal-backdrop bg-modal-background"
      >
        <div
          class="flex flex-col items-center w-11/12 overflow-auto bg-white border border-black shadow-2xl modal sm:max-w-screen-sm md:max-w-screen-md h-11/12"
        >
          <button
            class="self-end mt-4 mr-4 font-bold bg-white border border-black w-24px text-22"
            type="button"
            @click="exit"
          >
            X
          </button>
          <div class="flex flex-col w-11/12 m-2">
            <div class="flex flex-col m-2">
              <GenericForm
                :key="componentKey"
                :form-data="projectRepForm.formData"
                :label="projectRepForm.label"
                :fields="projectRepForm.fields"
                :space-arround="true"
              />
              <GenericForm
                :form-data="salesRepForm.formData"
                :label="salesRepForm.label"
                :fields="salesRepForm.fields"
                :space-arround="true"
              />
              <ButtonComp
                :label="action"
                background-color="bg-energy-yellow"
                border-color="border-transparent"
                class="block px-20 py-4 mx-auto mt-3 uppercase min-h-26px"
                @buttonPress="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="flex flex-wrap">
      <ButtonComp
        label="Print"
        background-color="bg-white"
        border-color="border-charade"
        class="block px-20 py-4 mx-3 mt-3 uppercase sm:mt-0"
        @buttonPress="() => open('Print')"
      />

      <ButtonComp
        v-if="$store.state.isAuthorized"
        label="Email"
        background-color="bg-energy-yellow"
        border-color="border-transparent"
        class="block px-20 py-4 mx-auto mt-3 uppercase sm:mt-0"
        @buttonPress="() => open('Email')"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      componentKey: 0,
      action: null,
      projectRepForm: {
        formData: {},
        label: 'Project Reciepent',
        fields: [
          {
            type: 'text',
            label: 'Name',
            name: 'name',
            placeholder: 'Type Your Name',
          },
          {
            type: 'text',
            label: 'Phone Number',
            name: 'phoneNumber',
            placeholder: 'Type Your Phone Number',
          },
          {
            type: 'text',
            label: 'Email',
            name: 'email',
            placeholder: 'Type Your Email',
          },
          {
            type: 'text',
            label: 'Location',
            name: 'location',
            placeholder: 'Type Your Location',
          },
          {
            type: 'text',
            label: 'Company',
            name: 'company',
            placeholder: 'Type Your Name',
          },
          {
            type: 'text',
            label: 'Role',
            name: 'role',
            placeholder: 'Type Your Role',
          },
        ],
      },
      salesRepForm: {
        formData: {},
        label: 'Sales Representative (optional)',
        fields: [
          {
            type: 'text',
            label: 'Name',
            name: 'name',
            placeholder: 'Type Your Name',
          },
          {
            type: 'text',
            label: 'Phone Number',
            name: 'phoneNumber',
            placeholder: 'Type Your Phone Number',
          },
          {
            type: 'text',
            label: 'Email',
            name: 'email',
            placeholder: 'Type Your Email',
          },
          {
            type: 'text',
            label: 'Location',
            name: 'location',
            placeholder: 'Type Your Location',
          },
          {
            type: 'text',
            label: 'Company',
            name: 'company',
            placeholder: 'Type Your Name',
          },
          {
            type: 'text',
            label: 'Role',
            name: 'role',
            placeholder: 'Type Your Role',
          },
        ],
      },
      visible: false,
    }
  },
  mounted() {
    if (
      this.$store.state.formData.salesRep &&
      this.$store.state.formData.salesRep.name
    ) {
      this.projectRepForm.formData = this.$store.state.formData.salesRep
    }
  },
  methods: {
    async submit() {
      // const inputValues = this.$store.state.formData
      const payload = {
        salesRep: this.salesRepForm.formData,
        clients: [this.projectRepForm.formData],
        email: this.action === 'Email',
      }
      // use a temp variable before the state is cleared so it can be shown in the alert
      const name = this.projectRepForm.formData.name
      const entryId = this.$store.state.id || this.$route.query.id
      try {
        if (this.action === 'Email') {
          const { data } = await this.$axios.put(
            `https://getfods-api.herokuapp.com/entries/${entryId}/sales`,
            payload
          )
          console.log(data)
          this.$swal({
            title: 'Success',
            icon: 'success',
            text: `Email sent to ${name}`,
            toast: true,
            confirmButtonColor: '#48bb78',
            position: 'top',
          })
          this.projectRepForm.formData = {}
          this.componentKey += 1
        } else {
          await this.$axios({
            url: `https://getfods-api.herokuapp.com/entries/${entryId}/sales`,
            method: 'PUT',
            responseType: 'arraybuffer',
            data: { ...payload },
          }).then((response) => {
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const url = window.URL.createObjectURL(blob)
            const w = window.open(url)
            w.print()
            setTimeout(w.close, 150)
            this.projectRepForm.formData = {}
            this.componentKey += 1
          })
        }
      } catch (err) {
        console.log('err', err)
        this.$swal({
          title: 'Error',
          icon: 'error',
          text: `Whoops, something went wrong when sending the ${this.action}.`,
          toast: true,
          confirmButtonColor: 'red',
          position: 'top',
        })
      }
    },
    exit() {
      this.visible = false
      this.action = null
    },
    open(action) {
      this.visible = true
      this.action = action
    },
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
</style>
