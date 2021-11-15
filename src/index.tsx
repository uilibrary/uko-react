import { AuthProvider } from "contexts/JWTAuthContext";
import SettingsProvider from "contexts/SettingsContext";
import TitleContextProvider from "contexts/TitleContext";
import "nprogress/nprogress.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "react-image-lightbox/style.css";
import { BrowserRouter } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import App from "./App";
import "./__fakeApi__";

ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <TitleContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TitleContextProvider>
      </SettingsProvider>
    </AuthProvider>
  </StrictMode>,
  document.getElementById("root")
);
