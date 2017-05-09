<template>
    <nav class="col-xs-12 app-header__submenu">
        <router-link v-for="master in masters"
                     :to="'/works/master/' + master.name"
                     class="app-header__submenu-item"
                     activeClass="app-header__submenu-item--active"
                     :key="master.name">
            {{description[master.name].name}}
        </router-link>
    </nav>
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