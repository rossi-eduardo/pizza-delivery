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
              <div class="container">
                  <h1 class="title">
                    Hello, __USERNAME__
                  </h1>
                  <h2 class="subtitle">
                    How you doing today? 🍕🍣
                  </h2>
              </div>
          </div>
      </section>
      </div>
      <div class="column">
        <div class="box">
          <h4 id="const" class="title is-3">const</h4>
          <article class="message is-primary">
            <span class="icon has-text-primary">
            <i class="fab fa-js"></i>
            </span>
            <div class="message-body">
              Block-scoped. Cannot be re-assigned. Not immutable.
            </div>
          </article>
          <pre class=" language-javascript"><code class=" language-javascript"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token string">'test'</span><span class="token punctuation">;</span></code></pre>
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
}
</style>
