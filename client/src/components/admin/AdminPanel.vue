<template>
  <div>
    <div class="columns">
      <div class="column is-full">
        <h4 class="title is-5 has-text-white">Admin control panel</h4>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="box">
          <div class="tabs">
            <ul>
              <li class="is-active">
                <router-link to="/admin/overview">
                  <font-awesome-icon icon="chart-bar" /> Overview
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <font-awesome-icon icon="pizza-slice" /> Orders
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <font-awesome-icon icon="user-friends" /> Customers
                </router-link>
              </li>
              <li>
                <router-link to="/admin/products">
                  <font-awesome-icon icon="hamburger" /> Products
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <font-awesome-icon icon="truck-loading" /> Inventory
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <font-awesome-icon icon="utensils" /> Restaurants
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <font-awesome-icon icon="users" /> Team
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <font-awesome-icon icon="cogs" /> System
                </router-link>
              </li>
            </ul>
          </div>
          <router-view name="router-view-admin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminOverview from '@/components/admin/AdminOverview'

export default {
  name: 'Admin',
  components: {
    AdminOverview
  }
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
.tabs svg {
  margin-right: 6px;
}
</style>
