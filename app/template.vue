<template>
	<div class="body">
		<img src="logo.png">
		<ul class="menu-list">
			<li><a><router-link to="/home">{{ $t('home') }}</router-link></a></li>
			<li><a><router-link to="/products">{{ $t('products') }}</router-link></a></li>
			<li><a><router-link to="/about-us">{{ $t('aboutus') }}</router-link></a></li>
			<li><a><router-link to="/contact-us">{{ $t('contactus') }}</router-link></a></li>
		</ul>
		<ul>
			<li v-on:click="chgLang('en')">EN</li>
			<li v-on:click="chgLang('it')">IT</li>
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
	methods: {
		chgLang: function (lang) {
			this.$polyglot.setLang({
				lang: lang
			})
		}
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
