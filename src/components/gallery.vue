<template>
    <section class="container-fluid full-height mt-md-5 pt-md-5 pt-lg-0">
        <div class="row full-height master">
            <div class="col-12 col-lg-3 master__info">
                <div class="container-fluid m-0">
                    <div class="row">
                        <div class="master__avatar col-12 col-md-4 col-lg-12"
                            :style="{ backgroundImage: 'url(/src/assets/masters/' + name + '.jpg)' }"></div>
                        <div class="master__description col-md-8 col-lg-12 mt-4">
                            <h2>{{description[name].name}}</h2>
                            <p class="master__description-item d-none d-md-flex mt-4">
                                {{description[name].full}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-8 gallery" @click="showOverlay">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 col-xl-3 gallery-pic no-padding"
                             v-for="picture in master.gallery"
                             :key="picture">
                            <img v-lazy="'/src/assets/gallery/' + master.name + '/' + picture" class="gallery-pic__img" alt="" :id="picture">
                        </div>
                    </div>
                </div>
            </div>
            <gallery-overlay 
                :master="master" 
                :picture="currentPic" 
                v-if="overlayIsActive" 
                :close-callback="closeCallback"
            ></gallery-overlay>
        </div>
    </section>
</template>

<script>
	import {EventBus} from '../eventBus'
    import galleryOverlay from './gallery-overlay.vue'
    import lazy from '../directives/lazy'

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
        },
        directives: { lazy },
        watch: {
            name() {
                window.pageYOffset = 0;
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
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
            background: center center no-repeat;
            background-size: cover;
            border-left: 5px solid rgb(50, 50, 50);
            border-radius: 15px;
            overflow: hidden;
            flex-shrink: 0;
        }

        &__description-item {
            font-size: .9em;
            position: relative;
        }
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
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
                opacity: 0;
                transition: .5s opacity;

                &[src] {
                    opacity: 1;
                }
            }
        }
    }
</style>