<template>
    <section class="container-fluid full-height overflow-hidden">
        <transition name="main" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>

    export default {
        name: 'about'
    }
</script>

<style lang="scss" src="../scss/inner-pages.scss"></style>