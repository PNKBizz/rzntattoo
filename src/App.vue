<template>
  <section class="container-fluid full-height no-padding">
    <transition name="header" mode="out-in">
      <app-header v-show="isHeaderEnable"></app-header>
    </transition>
    <transition name="main" mode="out-in">
      <keep-alive>
        <router-view :class="{ 'padding-for-header': isHeaderEnable }"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  import Header from './components/header.vue'

  export default {
      computed: {
          isHeaderEnable() {
              return this.$route.path !== '/';
          }
      },
      components: {
          'app-header': Header
      }
  }
</script>

<style>
  .padding-for-header {
    padding-top: 13vh;
  }

  .main-enter-active, .main-leave-active {
    transition: opacity .3s
  }
  .main-enter, .main-leave-to {
    opacity: 0;
  }

  .header-enter-active, .header-leave-active {
    transition: opacity .3s;
  }
  .header-enter, .header-leave-to {
    opacity: 0;
  }
</style>