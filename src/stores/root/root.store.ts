import { CountStore } from "../count.store";

export class RootStore {
  countStore: CountStore;

  constructor() {
    this.countStore = new CountStore(this);
  }
}
