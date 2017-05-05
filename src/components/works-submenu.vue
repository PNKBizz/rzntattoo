<template>
    <nav class="col-xs-12 app-header__submenu">
        <router-link v-for="master in masters"
                     :to="'/works/' + master.master"
                     class="app-header__submenu-item"
                     activeClass="app-header__submenu-item--active">{{description[master.master]}}</router-link>
    </nav>
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
        }
    }
</script>