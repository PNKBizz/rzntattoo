<template>
  <div class="container full-height">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-xs-12 col-md-4" id="skull">

      </div>
    </div>
  </div>
</template>

<script>
import Vivus from 'vivus'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    new Vivus('skull', {type: 'oneByOne', duration: 1000, file: '/src/assets/logo_front.svg'});
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

.full-height {
  height: 100%;
}

#skull {
  width: 200px;
  height: 200px;
}
</style>
