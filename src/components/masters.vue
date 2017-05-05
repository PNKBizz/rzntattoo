<template>
    <section class="container-fluid">
        <div class="row justify-content-start flex-wrap">
            <master-avatar v-for="master in masters"
                           :master="master.master"
                           :key="master.master"
                           class="col-xs-6 col-md-4 col-lg-2"></master-avatar>
        </div>
    </section>
</template>

<script>
    import masterAvatar from'./master-avatar.vue'
    import { EventBus } from '../eventBus'

    export default {
        computed: {
            masters() {
                return EventBus.masters
            }
        },
        components: {
            masterAvatar
        }
    }
</script>