import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { MealContextProvider } from "./MealContext";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
