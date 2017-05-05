<template>
    <section class="container-fluid full-height">
        <div class="row full-height">
            <div class="col-sm-12 col-md-3 master__info">
                <div class="master__avatar" :style="{ backgroundImage: 'url(/src/assets/masters/' + master + '.jpg)' }"></div>
                <div class="master__description"></div>
            </div>
            <div class="col-sm-12 col-md-9"></div>
        </div>
    </section>
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
            }
        },
        props: ['master']
    }
</script>

<style>
    .master__info {
        display: flex;
        flex-direction: column;
    }

    .master__avatar {
        height: 300px;
        background-size: cover;
        background: center center no-repeat;
    }
</style>