// Just sets the user to authorized or not
export default async function ({ store, redirect, app, $axios, route }) {
  const { $cookies } = app
  if (!store.state.isAuthorized) {
    if ($cookies.get('code')) {
      const code = $cookies.get('code').toString()
      try {
        await $axios.post('https://getfods-api.herokuapp.com/checkCode', {
          code,
        })
        store.commit('setIsAuthorized', true)
      } catch (err) {}
    }
  }
}
