<template>
  <div>
    <h1>Register</h1>

    <input type="email"
      name="input-email" v-model="email">
    <br>
    <input type="password"
    name="input-password" v-model="password">
    <br>
    <button type="button"
      @click="handleRegister">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleRegister () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })

      console.log(response.data)
    }
  }
  // watch: {
  //  email (value) {
  //    console.log('email has changed', value)
  //  }
  // },
  // mounted () {
  //  setTimeout(() => {
  //    this.email = 'hello world'
  //  }, 1000)
  // }
}
</script>

<style scoped>

</style>
