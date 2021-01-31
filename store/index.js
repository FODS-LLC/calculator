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
  updateForm(state, newForm) {
    //var entrance_length = state.formData.entrance_length
    //var refresh_frequency = state.formData.refresh_frequency
    //state.formData.entrance_length = entrance_length

    state.formData = { ...state.formData, ...newForm }

    //state.formData.entrance_length = entrance_length
    //state.formData.refresh_frequency = refresh_frequency
  },
  updateField(state, ( field, value )) {
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
