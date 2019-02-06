<template>
  <footer class="footer has-background-grey-darker">
    <div class="content has-text-centered has-text-white">
      <p>
        <strong class="has-text-white">Pizza Delivery</strong> by <a href="https://jgthms.com">Eduardo Silva</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
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
</style>
