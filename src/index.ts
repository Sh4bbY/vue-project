import Vue from 'vue';
import {Example} from 'vue-lib';

Vue.component('example', Example);

// init vue instance
new Vue({
  el: '#vue-app',
});


console.log('hello world');
