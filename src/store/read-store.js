import { Store } from "./main";
class ReadStore extends Store {
  data() {
    return {
      count: 0,
      readmode: true
    };
  }
  incrementCount() {
    this.state.count++;
  }
  readModeOn() {
    console.log('read true')
    this.state.readmode = true
  }
  readModeOff() {
    console.log('read false')
    this.state.readmode = false
  }
}
export const readStore = new ReadStore();