<template>
  <div class="container full-height">
    <div class="row justify-content-center align-items-center full-height">
      <div class="col-xs-12 col-md-4" id="skull">
        <div :class="['logo_background', {'active': isActive}]"></div>
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
      isActive: false
    }
  },
  mounted() {
    new Vivus('skull', {type: 'sync', duration: 100, file: '/src/assets/logo_front.svg'}, showLogo.bind(this));
    function showLogo() {
        console.log(this.isActive);
        this.isActive = true;
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

.full-height {
  height: 100%;
}

#skull {
  width: 400px;
  height: 400px;
  display: flex;
  position: relative;
  padding: 0;

  .logo_background {
    width: 100%;
    height: 100%;
    background: url('/src/assets/logo_front_black.svg') center center no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    background-size: contain;
    opacity: 0;
    transition: opacity 1s;

    &.active {
      opacity: 1;
    }
  }
}
</style>
