<template>
    <section class="container-fluid full-height no-padding">
        <transition name="header" mode="out-in">
            <app-header v-if="isHeaderEnable" class="hidden-sm-down"></app-header>
        </transition>
        <mobile-header v-if="isHeaderEnable" class="hidden-sm-up"></mobile-header>
        <div class="mobile-menu__button hidden-sm-up" v-if="isHeaderEnable">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <transition name="main" mode="out-in">
            <router-view :class="{ 'padding-for-header': isHeaderEnable }"></router-view>
        </transition>
    </section>
</template>

<script>
	import Header from './components/header.vue'
	import MobileHeader from './components/mobile-header.vue'
	import {EventBus} from './eventBus'

	export default {
		computed: {
			isHeaderEnable() {
				return this.$route.path !== '/';
			}
		},
		components: {
			'app-header': Header,
            'mobile-header': MobileHeader
		},
		created() {
			this.$http.get('/api/masters').then(response => EventBus.masters = response.body.masters)
		}
	}
</script>

<style lang="scss">
    .padding-for-header {
        padding: 50px 0 0 0 !important;

        @media screen and (min-width: 540px) {
            padding: 140px 0 0 0 !important;
        }
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