import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root, { action as rootAction, loader as rootLoader, } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { action as contactAction, loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction, } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";
import Hook from "./routes/hook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <Index/>
          },
          {
            path: "contacts/:contactId",
            element: <Contact/>,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact/>,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
          {
            path: "hook",
            element: <Hook/>,
          },
        ],
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
