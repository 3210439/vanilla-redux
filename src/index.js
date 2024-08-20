import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

// 새로운 createRoot API를 사용하여 root를 생성합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// createRoot를 사용해 App 컴포넌트를 렌더링합니다.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
