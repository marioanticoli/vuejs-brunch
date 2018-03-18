<template>
	<div class="body">
		<img src="logo.png">
		<ul class="menu-list">
			<li><a><router-link to="/home">Home</router-link></a></li>
			<li><a><router-link to="/products">Products</router-link></a></li>
			<li><a><router-link to="/about-us">About Us</router-link></a></li>
			<li><a><router-link to="/contact-us">Contact Us</router-link></a></li>
		</ul>
		<main class="container">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>

export default {
	data: function() {
		return {
		}
	},
	computed: {
	// 	routes() {
	// 		let r = [
	// 			{title: 'Home', path: '/'},
	// 			{title: 'Products', path: 'products'},
	// 			{title: 'About Us', path: 'about-us'},
	// 			{title: 'Contact Us', path: 'contact-us'},
	// 		]
	// 		return r
	// 	}
	},
	created() {
	}
}
</script>

<style>
	.body {
		padding: 30px;
		min-height: 100vh;
		min-width: 100vw;
		background-image: url('bg.png');
		background-size: cover;

		color: #a0a0a0;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: #a0a0a0;
	}
</style>
