<template>
    <header class="container-fluid app-header d-none d-md-block">
        <div class="row justify-content-center align-items-center full-height app-header__main-wrapper">
            <router-link to="/about" class="app-header__link col-md-4" activeClass="app-header__link--active">
                О студии
            </router-link>
            <router-link to="/" tag="div" class="col-md-4 app-header__link">
                <div class="logo_background logo_background--small"></div>
            </router-link>
            <router-link to="/works" class="app-header__link col-md-4" activeClass="app-header__link--active">
                Портфолио
            </router-link>
        </div>
        <div class="row justify-content-center align-items-end">
            <component :is="$route.fullPath.split('/')[1] + 'Submenu'" v-if="$route.fullPath !== '/'"></component>
        </div>
    </header>
</template>

<script>
	import aboutSubmenu from '../components/about-submenu.vue'
	import worksSubmenu from '../components/works-submenu.vue'

	export default {
		components: {
			aboutSubmenu,
			worksSubmenu
		}
	}
</script>

<style lang="scss">
    .app-header {
        height: 140px;
        background: url('/src/assets/logo_back.png') black;
        color: white;
        position: fixed !important;
        top: 0;
        width: 100%;
        z-index: 2;

        &__main-wrapper {
            overflow: hidden;
        }

        &__link {
            color: inherit;
            text-decoration: none;
            font-size: 3vmin;
            display: flex;
            cursor: pointer;

            &:first-child {
                justify-content: flex-end;
            }

            &:hover, &:focus, &:active {
                color: darkred;
                text-decoration: none;
            }

            &--active {
                color: darkred;
                text-decoration: none;
            }
        }

        &__submenu {
            display: flex;
            background-color: rgba(0, 0, 0, .8);
            border-top: 5px solid black;
            flex-grow: 1;
            justify-content: center;
            flex-wrap: wrap;

            @media screen and (max-width: 768px) {
                justify-content: space-between;
                &::after {
                    content: '';
                    flex-grow: 100;
                }
            }

            &-item {
                padding: 10px 20px;
                display: inline-block;
                color: white;
                white-space: nowrap;

                &:hover, &:focus {
                    text-decoration: none;
                    color: darkred;
                }

                &--active {
                    background-color: white;
                    color: darkred;
                }
            }
        }
    }

</style>