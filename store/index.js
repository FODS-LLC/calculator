export const state = () => ({
  formData: {
    entrance_length: '35',
    install_cost: '3500',
    refresh_cost: '650',
    refresh_frequency: 'bi-monthly',
    removal_cost: '3000',
    remediation_cost: '750',
    length_of_project: '18',
    pdfurl: '',
  },
  isAuthorized: false,
  startGenerate: false,
  redirectTo: '',
  isLoading: false,
  id: '',
})

export const mutations = {
  printToConsole(state, newForm) {
    console.log("$store.state.formData.entrance_length")
    console.log($store.state.formData.entrance_length)
    console.log('Form')
    console.log(newForm)
    console.log('State')
    console.log(state.formData)
  },
  updateForm(state, newForm) {
    state.formData = { ...state.formData, ...newForm }
  },
  updateField(state, { field, value }) {
    state.formData[field] = value
  },
  setStartGenerate(state, val) {
    state.startGenerate = val
  },
  setIsAuthorized(state, val) {
    state.isAuthorized = val
  },
  setPdf(state, url) {
    state.formData.pdfurl = url
  },
  setRedirectTo(state, path) {
    state.redirectTo = path
  },
  setIsLoading(state, val) {
    state.isLoading = val
  },
  setId(state, id) {
    state.id = id
  },
}
