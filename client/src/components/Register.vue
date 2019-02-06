<template>
  <div>
    <div class="column is-4 is-offset-4">
      <div class="box-title">
        <h3 class="title has-text-white">Sign up</h3>
        <p class="subtitle has-text-white">Create an account</p>
      </div>
      <form class="box" name="register-form">
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
          <label class="label">Confirm your password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" v-model="passwordConfirmation">
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
            <label class="checkbox">
              <input type="checkbox" v-model="terms">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-success"
              v-on:click="handleRegister">Create account</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      terms: false,
      error: null,
      errors: []
    }
  },
  methods: {
    async handleRegister () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation,
          terms: this.terms
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
