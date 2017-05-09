<template>
    <section class="container-fluid full-height">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
    }
</script>

<style>
    .slide-enter {
        transform: translateX(-100vw);
        opacity: 0;
        overflow: hidden;
    }

    .slide-leave-to {
        transform: translateX(100vw);
        opacity: 0;
        overflow: hidden;
    }

    .slide-enter-active, .slide-leave-active {
        transition: all .3s;
        overflow: auto;
    }

    .works__view {
        margin-top: 50px;
    }
</style>