<template>
    <v-touch tag="section"
             class="container-fluid full-height no-padding"
             @swiperight="onSwipeRight"
             @swipeleft="onSwipeLeft"
             :swipe-options="{ direction: 'horizontal', threshold: 100 }"
             :enabled="{tap: false}">
        <transition name="header" mode="out-in">
            <app-header v-if="isHeaderEnable" class="d-none d-md-block"></app-header>
        </transition>
        <transition name="header" mode="out-in">
            <mobile-header v-if="isHeaderEnable" class="d-sm-none"></mobile-header>
        </transition>
        <transition name="main" mode="out-in">
            <router-view :class="{ 'padding-for-header': isHeaderEnable }"></router-view>
        </transition>
    </v-touch>
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
		methods: {
            onSwipeRight() {
                EventBus.menuIsOpened = true;
            },
            onSwipeLeft() {
                EventBus.menuIsOpened = false;
            }
        },
		created() {
            this.$http.get('/api/masters')
                .then(response => EventBus.masters = response.body && response.body.masters)
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