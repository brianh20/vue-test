<template>
	<div>
		<p>I am HOME</p>
		<p>Value from routing: {{ this.$route.params.someValue }}</p>
		<router-link to="/message">Message</router-link>
		<button @click="someMethod">Clicked button</button>
	</div>
</template>

<script>
	export default {
		watch:{
			'$route' (to, from) {
				//alert(to.params.someValue);
			}
		},
		created() {
			//alert(this.$route.params.someValue);
		},
		methods: {
			someMethod() {
				this.$router.push('/14');
			}
		}
	}
</script>