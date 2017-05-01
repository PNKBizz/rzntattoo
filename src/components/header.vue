<template>
    <header class="container-fluid app-header">
        <div class="row justify-content-center align-items-center full-height">
            <router-link to="/about" class="app-header__link" activeClass="app-header__link--active">О студии</router-link>
            <router-link to="/" tag="div" class="col-xs-12 col-md-4 app-header__link">
                <div class="logo_background logo_background--small"></div>
            </router-link>
            <router-link to="/works" class="app-header__link" activeClass="app-header__link--active">Портфолио</router-link>
        </div>
    </header>
</template>

<style lang="scss">
    .app-header {
        height: 13vh;
        background-color: black;
        color: white;
        overflow: hidden;
        position: fixed !important;
        top: 0;
        width: 100%;
        z-index: 2;

        &__link {
            color: inherit;
            text-decoration: none;
            font-size: 3vmin;

            &:hover, &:focus, &:active {
                color: darkred;
                text-decoration: none;
            }

            &--active {
                color: darkred;
                text-decoration: none;
            }
         }
    }
</style>