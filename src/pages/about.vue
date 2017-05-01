<template>
    <section class="container-fluid">
        <nav class="inner-submenu container-fluid">
            <div class="row">
                <router-link to="/about/coords" class="inner-submenu__item">Как нас найти</router-link>
                <router-link to="/about/price" class="inner-submenu__item">Наши цены</router-link>
            </div>
        </nav>
        <router-view></router-view>
    </section>
</template>

<script>

    export default {

    }
</script>

<style lang="scss" src="../scss/inner-pages.scss"></style>