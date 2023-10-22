import { FC, PropsWithChildren, createContext } from "react";
import { RootStore } from "./root.store";

const rootStore = new RootStore();

export const RootStoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);
