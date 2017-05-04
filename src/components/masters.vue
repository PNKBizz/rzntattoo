<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <master-avatar v-for="master in masters"
                           :master="master.master"
                           :key="master.master"></master-avatar>
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