<template>
    <section class="container-fluid full-height">
        <div class="masters-back"></div>
        <div class="row justify-content-center">
            <div class="col-sm-10 col-lg-6 display-flex flex-wrap masters__wrapper">
                <router-link tag="div"
                             :to="'/works/master/' + master.name"
                             class="masters__avatar"
                             v-for="master in masters"
                             :key="master.name">
                    <div class="masters__image hidden-sm-down"
                         :style="{ backgroundImage: 'url(/src/assets/masters/' + master.name + '.jpg)' }"></div>
                    <div class="masters__description">{{description[master.name].name}}</div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
	import {EventBus} from '../eventBus'

	export default {
		computed: {
			masters() {
				return EventBus.masters
			},
			description() {
				return EventBus.description
			}
		}
	}
</script>

<style lang="scss">
    .masters-back {
        background: url('/src/assets/portfolio.jpg') no-repeat center center;
        background-size: cover;
        flex-grow: 1;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .masters__wrapper {
        margin-top: 100px;
    }

    .masters__avatar {
        flex-grow: 1;
        width: 100%;
        height: 50px;
        margin: 1%;
        position: relative;
        cursor: pointer;
        overflow: hidden;

        @media screen and (min-width: 540px) {
            max-width: 31%;
            min-width: 31%;
            width: 31%;
            height: 300px;
            border: 5px solid white;
        }

        &:hover .masters__image {
            transform: scale(1.2);
        }
    }

    .masters__image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background: center center;
        transition: transform .3s;
    }

    .masters__description {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px 0;
        background-color: rgba(0, 0, 0, .8);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
    }
</style>