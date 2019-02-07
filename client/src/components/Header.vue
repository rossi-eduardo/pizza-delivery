<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
      </router-link>

      <a role="button" class="navbar-burger burger" aria-label="menu"
        aria-expanded="false" data-target="div-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="div-menu" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item"
          v-if="$store.state.sessionActive"
          to="/home">
          <font-awesome-icon icon="home" class="fa-lg" />
        </router-link>
      </div>

      <div class="navbar-end">
        <router-link class="navbar-item"
          v-if="$store.state.user && $store.state.user.userType === 'admin'"
          to="/admin">
          <font-awesome-icon icon="tools" class="fa-lg" />
        </router-link>
        <router-link class="navbar-item"
          v-if="$store.state.sessionActive"
          to="/logoff">
          <font-awesome-icon icon="sign-out-alt" class="fa-lg" />
        </router-link>
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-danger"
              v-if="!$store.state.sessionActive"
              to="/register">
              <strong>Sign up</strong>
            </router-link>
            <router-link class="button is-light"
              v-if="!$store.state.sessionActive"
              to="/login">
              Log in
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.is-danger {
  background-color: #ff3b30;
}
.navbar-end {
  margin-right: 20px;
}
</style>
