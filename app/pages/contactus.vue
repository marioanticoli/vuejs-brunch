<template>
  <div id="app">
		<div id="btn" v-bind:class="{ active: isActive }" v-on:click="toggle">
    	<font-awesome-icon :icon="icon" />
			Prova
		</div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

export default {
  name: 'FAExample',

	data: function() {
		return {
			isActive: true
		}
	},

  computed: {
    icon () {
      return faCoffee
    }
  },

	methods: {
		toggle() {
			this.isActive ? false : true;
		}
	},

  components: {
    FontAwesomeIcon
  }
}
</script>

<style>
	#btn {
		width: 200px;
		height: 80px;
		border-radius: 5px;
		border: 1px solid black;
		background-color: black;
		text-align: center;
	}

	.active {
		background-color: green !important;
	}

</style>
