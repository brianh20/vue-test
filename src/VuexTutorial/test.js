import List from './list/list.vue';

export default {
	create() {
		console.log('vuex loaded');
	},
	data () {
		return {
			registrations : [],
			users : [
				{id: 1, name: 'Brian', registered: false},
				{id: 2, name: 'Luisa', registered: false}
			]
		}
	},
	methods: {
		removeRegistration(user) {
			this.users.forEach((userList) => {
				if (userList.id === user.id){
					userList.registered = false;
				}
			});
		},
		register(user) {
			this.users.forEach((userList) => {
				if (userList.id === user.id){
					userList.registered = true;
				}
			});	
		}
	},
	components: {
		'vuex-list' : List
	}
}