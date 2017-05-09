import Vue from 'vue';
import app from './app.vue'
import './test.css'

new Vue({
	el:'#app',
	render: h=>h(app)
})