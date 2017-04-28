<template>
    <div class="container-fluid full-height">
        <div class="row justify-content-center align-items-center full-height">
            <nav class="hidden-sm-up col-xs-10 main-nav--vertical" :class="{'active': isActive}">
                <router-link class="main-nav--vertical__item" to="/about">О студии</router-link>
                <router-link class="main-nav--vertical__item" to="/works">Портфолио</router-link>
            </nav>
            <div class="col-xs-12 col-md-4" id="skull">
                <div :class="['logo_background', {'active': isActive}]">
                    <span class="since">Since 2009</span>
                </div>
            </div>
            <nav class="hidden-sm-down col-md-12 main-nav--horizontal" :class="{'active': isActive}">
                <router-link to="/about" class="main-nav--horizontal__item">О студии</router-link>
                <div class="col-xs-12 col-md-4"></div>
                <router-link to="/works" class="main-nav--horizontal__item">Портфолио</router-link>
            </nav>
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
            new Vivus('skull', {type: 'sync', duration: 200, file: '/src/assets/logo_front.svg'}, showLogo.bind(this));
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
        font-family: 'Merriweather', serif;
    }

    .full-height {
        height: 100%;
    }

    #skull {
        width: 100%;
        display: flex;
        position: relative;
        padding: 0;
        z-index: 1;

        .logo_background {
            width: 100%;
            padding-top: 100%;
            background: url('/src/assets/logo_front_black.svg') black center center no-repeat;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-size: contain;
            opacity: 0;
            transition: opacity 1s;
            display: flex;
            justify-content: center;

            .since {
                color: white;
                position: absolute;
                bottom: 10%;
            }

            &.active {
                opacity: 1;
            }
        }
    }

    .main-nav {

        &--vertical {
            position: absolute;
            top: -100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all .5s;
            transition-delay: .5s;

            &.active {
                top: 0;
            }

            &__item {
                margin-top: 10px;
                color: white;
                background-color: black;
                font-size: 2em;
            }
        }

        &--horizontal {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            position: absolute;
            padding: 0 0 0 40px;
            z-index: 0;
            height: 0;
            opacity: 0;
            transition: all .5s;
            transition-delay: .8s;

            &__item {
                font-size: 4vh;
                padding: 10px;
                cursor: pointer;
            }

            &.active {
                height: 7vh;
                opacity: 1;
            }

            span {
                margin: 10px;
                color: white;
                display: inline-block;
            }
        }
    }
</style>
