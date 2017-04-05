export default {
	props: ['users'],
	methods: {
		unregister (user) {
			this.$emit('userUnregistered', user);
		}
	}
}