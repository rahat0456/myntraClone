import { render } from "react";
import App from "./routes/app.jsx";
import Home from "./routes/Home.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

render(
  <Provider store={myntraStore}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("app")
);
