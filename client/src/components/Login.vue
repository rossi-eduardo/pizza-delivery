<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex xs4>
      <div class="white elevation-2">
        <v-toolbar flat dense dark class="red darken-2">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-form class="pt-4 pb-2 pl-4 pr-4"
          name="form-login">
          <v-text-field
            label="Email address"
            name="input-email"
            v-model="email"
            solo>
          </v-text-field>
          <v-text-field
            :type="'password'"
            label="Password"
            name="input-password"
            v-model="password"
            solo>
          </v-text-field>
          <span class="red--text" v-html="error"></span>
          <br>
          <v-btn class="blue" dark
            @click="handleLogin">
            Login
          </v-btn>
        </v-form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async handleLogin () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: #f00;
}
button.blue {
  font-weight: 600;
}
</style>
