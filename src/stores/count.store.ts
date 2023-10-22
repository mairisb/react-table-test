import { makeAutoObservable } from "mobx";
import { RootStore } from "./root/root.store";

export class CountStore {
  rootStore: RootStore;
  count = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };
}
