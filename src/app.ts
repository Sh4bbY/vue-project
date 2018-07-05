import {Vue} from 'vue-property-decorator';
//@ts-ignore
import * as vueLib from 'vue-lib';
//@ts-ignore
import { VueClassComponent, VueComponent, VueFileComponent } from 'vue-lib';
import { LocalComponent } from './components';

// Vue.component('LocalComponent', LocalComponent);
// Vue.component('VueComponent', VueComponent);
// Vue.component('VueClassComponent', VueClassComponent);
// Vue.component('VueFileComponent', VueFileComponent);

const app = new Vue({
  components: {
    LocalComponent,
    VueComponent,
    VueClassComponent,
    VueFileComponent
  }
  }
);

app.$mount('#vue-app');

console.log('vue-lib:', vueLib);
console.log('local-comp:', LocalComponent);
