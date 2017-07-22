<template>
    <section class="container-fluid full-height">
        <div class="row full-height master">
            <div class="col-12 col-sm-3 master__info">
                <div class="master__avatar"
                     :style="{ backgroundImage: 'url(/src/assets/masters/' + name + '.jpg)' }"></div>
                <div class="master__description">
                    <h2>{{description[name].name}}</h2>
                    <p class="master__description-item">
                        {{description[name].full}}
                    </p>
                </div>
            </div>
            <div class="col-12 col-sm-8 gallery" @click="showOverlay">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 col-xl-3 gallery-pic no-padding"
                             v-for="picture in master.gallery"
                             :key="picture">
                            <img :src="'/src/assets/gallery/' + master.name + '/' + picture" class="gallery-pic__img" alt="" :id="picture">
                        </div>
                    </div>
                </div>
            </div>
            <gallery-overlay :master="master" :picture="currentPic" v-if="overlayIsActive" :close-callback="closeCallback"></gallery-overlay>
        </div>
    </section>
</template>

<script>
	import {EventBus} from '../eventBus'
    import galleryOverlay from './gallery-overlay.vue'

	export default {
	    data() {
	        return {
                currentPic: '',
                overlayIsActive: false
            }
        },
		computed: {
			master() {
				return EventBus.masters.filter(master => master.name === this.name)[0] || {};
			},
			description() {
				return EventBus.description
			}
		},
		props: ['name'],
        components: {
	        galleryOverlay
        },
        methods: {
            showOverlay(event) {
                console.log(event.target.id);
                this.currentPic = event.target.id;
                this.overlayIsActive = true;
            },
            closeCallback() {
                this.overlayIsActive = false;
            }
        }
	}
</script>

<style lang="scss">
    .master {
        &__info {
            display: flex;
            flex-direction: column;
            padding: 20px;
            box-sizing: border-box;
        }

        &__avatar {
            height: 300px;
            margin: 50px 0;
            background: center center no-repeat;
            background-size: cover;
            border-left: 5px solid rgb(50, 50, 50);
            border-radius: 15px;
            overflow: hidden;
            flex-shrink: 0;
        }

        &__description-item {
            padding: 20px 50px;
            margin-top: 50px;
            border-left: 5px solid darkgray;
            border-radius: 15px;
            font-size: .9em;
            position: relative;
            background-color: rgba(200, 200, 200, .5);

            &:after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                top: 20px;
                left: 20px;
                background: url('/src/assets/quotes.svg') no-repeat left top;
                background-size: 20%;
                fill: darkgray;
                z-index: -1;
            }
        }
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        flex-grow: 1;
        max-width: 100%;
        padding: 0;

        &:after {
            content: '';
            flex-grow: 111111;
        }

        &-pic {
            height: 300px;
            overflow: hidden;
            border: 5px solid rgba(255, 255, 255, .7);
            box-sizing: border-box;
            cursor: pointer;

            &__img {
                max-width: 100%;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
</style>