<template>
  <div>
    <template v-if="error">
      <div
        class="flex items-center justify-center w-screen h-screen text-5xl text-white bg-red-700"
      >
        Error.
      </div>
    </template>
    <template v-else>
      <Calculations v-if="!loading" />
      <div
        v-else
        class="flex items-center justify-center w-screen h-screen text-5xl"
      >
        <div
          class="w-20 h-20 border-8 border-blue-700 rounded-full loader"
        ></div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  layout: 'mixed',
  data() {
    return {
      loading: true,
      error: false,
    }
  },
  async mounted() {
    try {
      const { data } = await this.$axios.get(
        `https://getfods-api.herokuapp.com/entries/${this.$route.params.id}`
      )
      const formData = data
      // delete ids so they aren't sent when creating new entries
      delete formData.id
      delete formData._id
      this.$store.commit('updateForm', formData)
      this.loading = false
      //   this.$store.commit('setStartGenerate', true)
    } catch (err) {
      this.$swal({
        title: 'Error',
        icon: 'error',
        text: `Could not find that entry.`,
        confirmButtonColor: 'red',
      })
      this.error = true
    }
  },
}
</script>

<style></style>
