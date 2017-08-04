<template>
    <div class="container-fluid full-height" v-if="browserSupported">
        <div class="row justify-content-center align-items-center full-height">
            <nav class="hidden-sm-up col-10 main-nav--vertical" :class="{'active': !isInactive}">
                <router-link class="main-nav--vertical__item" to="/about">О студии</router-link>
                <router-link class="main-nav--vertical__item" to="/works">Портфолио</router-link>
            </nav>
            <div class="col-9 col-md-3" id="skull">
                <div :class="['logo_background', {'inactive': isInactive}]">
                    <span class="since">Since 2009</span>
                </div>
                <div :class="['social-icons', {'active': !isInactive}]">
                    <social-vk class="social-icons__icon"></social-vk>
                    <social-inst class="social-icons__icon"></social-inst>
                </div>
            </div>
            <nav class="hidden-sm-down col-md-12 main-nav--horizontal" :class="{'active': !isInactive}">
                <router-link to="/about" class="col-md-4 main-nav--horizontal__item display-flex justify-content-end">
                    <span>О студии</span>
                </router-link>
                <div class="col-md-4"></div>
                <router-link to="/works" class="col-md-4 main-nav--horizontal__item">Портфолио</router-link>
            </nav>
        </div>
    </div>
    <div v-else>
        Пожалуйста, обновите браузер. Он очень стар... <br>
        <a href="https://vk.com/rzntatu">Мы ВКонтакте</a>
    </div>
</template>

<script>
	import Vivus from 'vivus'
	import vk from '../components/vk.vue'
    import inst from '../components/inst.vue'
  	import { EventBus } from '../eventBus'

	export default {
		name: 'Main',
		data () {
			return {
				isInactive: true,
                browserSupported: false
			}
		},
		components: {
			'social-vk': vk,
			'social-inst': inst
		},
		created() {
            if ("foobar"[3] === "b") { // проверка на поддержку фич
                this.browserSupported = true;
            }
        },
		mounted() {
			if (this.browserSupported && EventBus.siteIsntLoaded) {
                new Vivus('skull', {type: 'sync', duration: 200, file: '/src/assets/logo_front.svg'}, showLogo.bind(this));
                function showLogo() {
                    this.isInactive = false;
                    EventBus.siteIsntLoaded = false;
                }
            } else {
                this.isInactive = false;
            }
		}
	}
</script>

<style lang="scss" src="../scss/main.scss"></style>
