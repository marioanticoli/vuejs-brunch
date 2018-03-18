<template>
	<div>
		<div v-bind:class="classes" v-on:click="toggle">Contenuto Home</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				isActive: false
			}
		},
		computed: {
			// classes: function () {
			// 	return this.isActive ? "class1" : "class2"
			// }
		},
		components: {
		},
		methods: {
	    // toggle: function (event) {
			// 	let self = this
			// 	self.isActive = self.isActive ? false : true
			// 	setTimeout(function() {
			// 		self.isActive = false;
			// 	}, 5000);
	    // }
	  }
	}
</script>

<style>
	.class1 {
	}
	.class2 {
	}
</style>
