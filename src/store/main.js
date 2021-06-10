// https://medium.com/@mario.brendel1990/vue-3-the-new-store-a7569d4a546f
import { reactive, readonly } from 'vue';
export class Store {
  constructor() {
    let data = this.data();
    this.setup(data);
    this.state = reactive(data);
  }
  
  /* eslint-disable no-unused-vars */
  setup(data) {}
  /* eslint-enable no-unused-vars */

  getState() {
    let foo = readonly(this.state);
    return foo;
  }
}