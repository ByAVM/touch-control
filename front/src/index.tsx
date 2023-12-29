/* @refresh reload */
import { render } from "solid-js/web";
import 'ress/ress.css';
import "./index.css";
import { LoggerProvider } from "@modules/Logger/context";
import { Router, Route } from "@solidjs/router";
import { LayoutActivity } from "@activities/Layout";
import { LoggerMessages } from "@modules/Logger";
import { AppStoreContextProvider } from "@App/AppStore";
import { LayoutsActivity } from "@activities/Layouts";
import { WSClientContextProvider } from "@App/WSClient";
import { Wrapper } from "@modules/Wrapper";

const root = document.getElementById("root");

const basePath = import.meta.env.BASE_URL;

render(() => {
  return (
    <AppStoreContextProvider>
      <LoggerProvider enabled>
        <WSClientContextProvider>
          <Router base={basePath}>
            <Route path="/" component={LayoutsActivity} />
            <Route path="/layout" component={Wrapper}>
              <Route path="/:layout" component={LayoutActivity} />
            </Route>
          </Router>
          <LoggerMessages />
        </WSClientContextProvider>
      </LoggerProvider>
    </AppStoreContextProvider>
  );
}, root!);
