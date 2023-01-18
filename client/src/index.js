import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./index.css";
import App from "./App";
import Auth0ProviderWithHistory from "./components/Auth0ProviderWithHistory";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
}
.main-content {
  flex-grow:2;
}
.main-layout > * {  
  max-width:1344px;
}
.narrow-layout > * {
  max-width:627px;
}
.main-layout > *, .narrow-layout > * {   
  margin-left:auto;
  margin-right:auto;
} 
.page-padding {
  padding-left:1rem;
  padding-right:1rem;
}
.section-padding {
  padding-top:1rem;
  padding-bottom:1rem;
}
@media only screen and (min-width: 672px) {
  .half-width{
    max-width:672px;
  }
}
.left-align {
  text-align: left;
}
.right-align {
  text-align: right;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <GlobalStyle />
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
