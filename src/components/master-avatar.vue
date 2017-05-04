<template>
    <section class="master-section full-height">
        <div class="master__wrap">
            <div class="master" :style="{ backgroundImage: 'url(/src/assets/masters/' + master + '.jpg)' }"></div>
            <div class="master_back">
                {{description[master]}}
            </div>
        </div>
    </section>
</template>

<script>
    import { EventBus } from '../eventBus'

    export default {
        computed: {
            description() {
                return EventBus.description
            }
        },
        props: {
            master: String
        }
    }
</script>

<style lang="scss">
    .master-section {
        perspective: 2500px;
        width: 300px;
        height: 300px;

        .master__wrap {
            width: 300px;
            height: 300px;
            margin: 50px;
            transition: all .5s;
            transform-style: preserve-3d;
            transform: translateZ(-150px);
            position: relative;

            &:hover {
                transform: rotateY(-90deg) translateX(-150px);
            }

        }

        .master {
            background: no-repeat center center;
            background-size: contain;
            position: absolute;
            left: 0;
            top: 0;
            width: 300px;
            height: 300px;
            transform: rotateY(0deg) translateZ(150px);
        }

        .master_back {
            width: 300px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 50%;
            top: 0;
            background-color: black;
            color: white;
            font-size: 2em;
            transform-origin: 0 0;
            transform: rotateY(90deg) translateZ(150px) translateX(-150px);
        }
    }
</style>