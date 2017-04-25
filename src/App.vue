<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-md-4">content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import "/node_modules/normalize.css/normalize.css";
@import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

body, html {
  height: 100%;
}

body {
  background: url('/src/assets/logo_back.png');
}
</style>
