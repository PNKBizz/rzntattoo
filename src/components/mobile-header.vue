<template>
    <header class="mobile-header">
        <div :class="['mobile-button', {'active': menuIsOpened}]" @click="menuIsOpened = !menuIsOpened">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <section :class="['mobile-drawer', {'active': menuIsOpened}]">
            <router-link to="/about/coords" class="mobile-drawer__link" activeClass="mobile-drawer__link--active">Как нас найти</router-link>
            <router-link to="/about/price" class="mobile-drawer__link" activeClass="mobile-drawer__link--active">Наши цены</router-link>
            <h3 class="mobile-drawer__masters">Наши мастера</h3>
            <router-link v-for="master in masters"
                         :key="master.name"
                         :to="'/works/master/' + master.name"
                         class="mobile-drawer__link"
                         activeClass="mobile-drawer__link--active">{{description[master.name].name}}</router-link>
            <div class="mobile-drawer__social-icons">
                <social-vk class="social-icons__icon"></social-vk>
                <social-inst class="social-icons__icon"></social-inst>
            </div>
        </section>
    </header>
</template>

<script>
    import { EventBus } from '../eventBus'
    import vk from '../components/vk.vue'
    import inst from '../components/inst.vue'

    export default {
        data() {
            return {
                menuIsOpened: false
            }
        },
        computed: {
            masters() {
                return EventBus.masters
            },
            description() {
                return EventBus.description
            }
        },
        components: {
            'social-vk': vk,
            'social-inst': inst
        }
    }
</script>

<style lang="scss">
    .mobile-header {
        position: fixed;
        width: 100%;
        height: 50px;
        z-index: 999;
        background: url('/src/assets/logo_front_black.svg') black center center no-repeat;
        background-size: 100px;
    }

    .mobile-button {
        position: fixed;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        padding: 13px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
            background-color: white;
            flex-basis: 2px;
            transform-origin: 0 0;
            transition: all .5s;
        }

        &.active {
            span:first-child {
                transform: rotate(45deg);
            }

            span:nth-child(2) {
                transform: translateX(-100vw);
            }

            span:last-child {
                transform: rotate(-45deg);
            }
        }
    }

    .mobile-drawer {
        position: fixed;
        top: 50px;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
        width: 80vw;
        height: 100%;
        transform: translateX(-100vw);
        transition: transform .3s;
        padding: 50px;
        display: flex;
        flex-direction: column;

        &.active {
            transform: translateX(0);
        }

        &__link {
            color: white;
            padding: 8px 10px;

            &:active, &:hover, &:focus {
                color: white;
                text-decoration: none;
            }

            &--active {
                background-color: darkred;
                border-radius: 10px;
            }
        }

        &__masters {
            color: darkred;
            padding-top: 50px;
        }

        &__social-icons {
            position: fixed;
            bottom: 10%;
            display: flex;
            align-self: center;
            justify-content: center;
        }
    }
</style>