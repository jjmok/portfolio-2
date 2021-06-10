import { Store } from "./main";
class ReadStore extends Store {
  data() {
    return {
      readmode: false
    };
  }
  readModeOn() {
    this.state.readmode = true
  }
  readModeOff() {
    this.state.readmode = false
  }
}
export const readStore = new ReadStore();