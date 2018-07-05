import {Vue, Component} from 'vue-property-decorator';

@Component
export default class LocalComponent extends Vue {
  count = 0;

  get name() {
    return 'LocalComponent';
  }
}
