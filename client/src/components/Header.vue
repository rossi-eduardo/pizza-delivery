<template>
  <v-toolbar fixed dark color="red darken-4" dense>
    <v-toolbar-title>Pizza Delivery</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/" flat
        v-if="$store.state.sessionActive">
        Home
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to='/register' flat
        v-if="!$store.state.sessionActive">
        Register
      </v-btn>
      <v-btn to='/login' flat
        v-if="!$store.state.sessionActive">
        Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
</style>
