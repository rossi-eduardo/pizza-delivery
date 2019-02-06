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
          to="/home">
          Home
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="navbar-item has-text-light">
            Doesn't have a account?
          </div>
          <div class="buttons">
            <router-link class="button is-danger"
              to="/register">
              <strong>Sign up</strong>
            </router-link>
            <router-link class="button is-light"
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
