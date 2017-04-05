<template>
	<div>
		<p>Aguante Rivers</p>
		<app-input :msg="message" v-on:messageHasChanged="message = $event"></app-input>
		<router-link to="/12">Home</router-link>
	</div>
</template>

<script>
	import Input from './Input.vue';

	export default {
		data () {
			return {
				message: 'Im in Messagge'
			}
		},
		components: {
			'app-input': Input
		}
	}
</script>