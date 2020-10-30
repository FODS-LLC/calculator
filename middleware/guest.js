export default async function ({ store, redirect, app, $axios }) {
  const { $cookies } = app
  if (store.state.isAuthorized) {
    store.commit('setIsAuthorized', true)
    return redirect('/')
  } else if ($cookies.get('code')) {
    const code = $cookies.get('code').toString()
    try {
      await $axios.post('https://getfods-api.herokuapp.com/checkCode', {
        code,
      })
      store.commit('setIsAuthorized', true)
      return redirect('/')
    } catch (err) {
      console.log('err', err)
    }
  }
}
