<template>
    <header class="mobile-header">
        <div class="linkToMain" @click="$router.push('/')"></div>
        <div class="spinner-master4" :class="{ 'active': menuIsOpened }">
            <div class="spinner-spin4" @click="toggleMenu">
                <div class="spinner4 diagonal part-1"></div>
                <div class="spinner4 horizontal"></div>
                <div class="spinner4 diagonal part-2"></div>
            </div>
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
        </section>
    </header>
</template>

<script>
    import { EventBus } from '../eventBus'

    export default {
        computed: {
            masters() {
                return EventBus.masters
            },
            description() {
                return EventBus.description
            },
            menuIsOpened() {
                return EventBus.menuIsOpened
            }
        },
        methods: {
            toggleMenu() {
                EventBus.menuIsOpened = !EventBus.menuIsOpened;
            }
        }
    }
</script>

<style lang="scss">
    .mobile-header {
        position: fixed;
        width: 100%;
        height: 50px;
        z-index: 999;
        background: url('/src/assets/logo.png') black center center no-repeat;
        background-size: 50px;

        .linkToMain {
            width: 100px;
            height: 50px;
            position: fixed;
            top: 0;
            left: calc(50% - 50px);
        }
    }

    .spinner-master4 * {transition:all 0.3s;-webkit-transition:all 0.3s;box-sizing:border-box;}

    .spinner-master4 {position:relative;height:50px;width:50px;transform:scale(0.6);}

    .spinner-master4 .spinner-spin4 {cursor:pointer;position:absolute;z-index:99;height:100%;width:100%;top:10px;left:0;}

    .spinner-master4 .spinner4 {position:absolute;height:5px;width:100%;background-color:#fff;}

    .spinner-master4 .diagonal.part-1 {position:relative;float:left;}
    .spinner-master4 .horizontal {position:relative;float:left;margin-top:6px;}
    .spinner-master4 .diagonal.part-2 {position:relative;float:left;margin-top:6px;}

    .spinner-master4.active .spinner-spin4 > .horizontal {transform:translate(-100px, 0px);-webkit-transform:translate(-100px, 0px); opacity: 0;}
    .spinner-master4.active .spinner-spin4 > .diagonal.part-1 {transform:rotate(-135deg);-webkit-transform:rotate(-135deg);margin-top:10px;}
    .spinner-master4.active .spinner-spin4 > .diagonal.part-2 {transform:rotate(135deg);-webkit-transform:rotate(135deg);margin-top:-16px;}

    .mobile-drawer {
        position: fixed;
        top: 50px;
        left: 0;
        background-color: rgba(0, 0, 0, .8);
        width: 100vw;
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
    }
</style>