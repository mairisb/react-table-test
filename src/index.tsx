import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components/app.component";
import "./index.scss";
import { RootStoreProvider } from "./stores/root/root.store-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </StrictMode>
);
