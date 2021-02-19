<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="w-11/12 p-4 bg-white shadow-2xl sm:w-1/4">
      <span class="hidden inline mb-2 text-sm sm:text-base" 
        >Enter the code below: </span
      >
      <img class="h-6 inline-block mb-2 rounded-sm" src="/drawings/message/message.png"/>
      <form @submit.prevent="authorize">
        <div>
          <input
            v-model="code"
            placeholder="Code"
            name="code"
            type="text"
            class="hidden block w-full mx-auto form-input"
          />
          
          <input 
            v-model="message"
            class="hpf" 
            autocomplete="off" 
            type="text" 
            id="message" 
            name="message" 
            placeholder="Message" 
            style="
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              height: 0;
              width: 0;
              z-index: -1;
              "
          />
          <span v-if="message" class="">{{ hpf }}</span>
        </div>
        <button
          class="w-full px-20 py-4 mt-2 uppercase bg-energy-yellow hover:opacity-75"
        >
          Open the ROI Calculator.
        </button>
        <span v-if="error" class="font-bold text-red-500">{{ error }}</span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guest',
  data: () => ({
    code: '',
    message: '',
    hpf: '',
    error: '',
  }),
  methods: {
      async authorize() {
        this.error = ''
        this.hpf = this.message
        if (this.hpf == '') {
          this.$cookies.set('code', this.code)
          this.$store.commit('setIsAuthorized', true)
          this.$router.push(this.$store.state.redirectTo)
          if (False){
            try {
              await this.$axios.post('https://getfods-api.herokuapp.com/checkCode', {
                code: this.code,
              })
              this.$cookies.set('code', this.code)
              this.$store.commit('setIsAuthorized', true)
              this.$router.push(this.$store.state.redirectTo)
            } catch (err) {
              console.log('err', err)
              this.error = 'Incorrect code.'
            }
          }
        }
    },
  },
}
</script>

<style></style>
