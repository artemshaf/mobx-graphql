import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CustomApolloProvider } from "@components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CustomApolloProvider>
    <App />
  </CustomApolloProvider>
);
