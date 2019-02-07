<template>
  <div>
    <div class="column is-4 is-offset-4">
      <div class="box-title">
        <h3 class="title has-text-white">Sign in</h3>
        <p class="subtitle has-text-white">Log in with your account</p>
      </div>
      <form class="box" name="register-form">
        <div class="field has-text-danger" v-if="error">{{ error }}</div>
        <div class="field">
          <label class="label">Email address</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" v-model="email">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="user" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help"></p>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" v-model="password">
            <span class="icon is-small is-left">
              <font-awesome-icon icon="key" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button type="button" class="button is-success"
              v-on:click="handleLogin">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
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
.box {
  max-width: 520px;
}
.box-title {
  margin-bottom: 20px;
}
.helper-links a {
  color: #ff3b30;
}
.helper-links a:hover,
.helper-links a:active {
  color: #bf2a22;
}
</style>
