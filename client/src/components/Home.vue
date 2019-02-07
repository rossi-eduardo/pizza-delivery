<template>
  <div>
    <div class="columns" v-if="false === true">
      <div class="column is-full">
        <article class="message is-info">
          <div class="message-header">
            <p>Normal message</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column is-three-quarters">
        <section class="hero is-warning is-small">
          <div class="hero-body">
            <h1 class="title">
              Hello, __USERNAME__
            </h1>
            <h2 class="subtitle">
              How you doing today? 🍕
            </h2>
          </div>
        </section>
        <br>
        <div class="box">
          <h4 id="const" class="title is-4">Some title here</h4>
          <p>Some information here</p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li>
                <router-link to="#">
                  <font-awesome-icon icon="tasks" class="has-text-warning" />
                  My orders
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <font-awesome-icon icon="cog" class="has-text-primary" />
                  Account settings
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <font-awesome-icon icon="sign-out-alt" class="has-text-danger" />
                  Log off
                </router-link>
              </li>
              <p class="menu-label">
                Transactions
              </p>
              <ul class="menu-list">
                <li>
                  <router-link to="#">
                    <font-awesome-icon icon="wallet" class="has-text-grey" />
                    My wallet
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <font-awesome-icon icon="credit-card" class="has-text-info" />
                    Payment info
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <font-awesome-icon icon="cash-register" class="has-text-success" />
                    Payment history
                  </router-link>
                </li>
              </ul>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.footer {
  margin-top: 40px;
  padding-bottom: 3rem;
  right: 0;
  bottom: 0;
  left: 0;
}
.footer a {
  color: #ff3b30;
}
.footer a:hover,
.footer a:active {
  color: #bf2a22;
}
.hero.is-warning {
  background: #ffcc00;
  background: -webkit-linear-gradient(to right, #ffdd57, #ffcc00);
  background: linear-gradient(to right, #ffdd57, #ffcc00);
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
.menu-list svg {
  margin-right: 9px;
}
</style>
