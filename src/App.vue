<template>
    <section class="container-fluid full-height no-padding">
        <transition name="header" mode="out-in">
            <app-header v-if="isHeaderEnable" class="hidden-sm-down"></app-header>
        </transition>
        <div class="mobile-menu__button hidden-sm-up" v-if="isHeaderEnable"></div>
        <transition name="main" mode="out-in">
            <router-view :class="{ 'padding-for-header': isHeaderEnable }"></router-view>
        </transition>
    </section>
</template>

<script>
	import Header from './components/header.vue'
	import {EventBus} from './eventBus'

	export default {
		computed: {
			isHeaderEnable() {
				return this.$route.path !== '/';
			}
		},
		components: {
			'app-header': Header
		},
		created() {
			this.$http.get('/api/masters').then(response => EventBus.masters = response.body.masters)
		}
	}
</script>

<style lang="scss">
    .padding-for-header {
        padding: 0 !important;

        @media screen and (min-width: 540px) {
            padding: 140px 0 0 0 !important;
        }
    }

    .mobile-menu__button {
        position: fixed;
        z-index: 99;
        top: 50px;
        left: 50px;
        width: 30px;
        height: 3px;
        background-color: white;
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