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
import Hooks from "./routes/hooks";
import MicroApp from "./routes/micro-app";
import UseCountDown from "./routes/hooks/UseCountDown";
import UseCreation from './routes/hooks/UseCreation';
import UseEventListener from './routes/hooks/UseEventListener';
import UseHover from './routes/hooks/UseHover';
import UseInterval from './routes/hooks/UseInterval';
import UseLatest from './routes/hooks/UseLatest';
import UsePow from './routes/hooks/UsePow';
import UseReactive from './routes/hooks/UseReactive';
import UseTimeout from './routes/hooks/UseTimeout';
import UseUpdate from './routes/hooks/UseUpdate';
import UseUnmount from './routes/hooks/UseUnmount';
import UseMount from './routes/hooks/UseMount';
import UseMemo from './routes/hooks/UseMemo';

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
            path: "hooks",
            element: <Hooks/>,
            children: [
              {
                path: "UseMemo",
                element: <UseMemo/>,
              },
              {
                path: "useCountDown",
                element: <UseCountDown/>,
              },
              {
                path: "useCreation",
                element: <UseCreation/>,
              },
              {
                path: "useEventListener",
                element: <UseEventListener/>,
              },
              {
                path: "useHover",
                element: <UseHover/>,
              },
              {
                path: "useInterval",
                element: <UseInterval/>,
              },
              {
                path: "useLatest",
                element: <UseLatest/>,
              },
              {
                path: "useMount",
                element: <UseMount/>,
              },
              {
                path: "usePow",
                element: <UsePow/>,
              },
              {
                path: "useReactive",
                element: <UseReactive/>,
              },
              {
                path: "useTimeout",
                element: <UseTimeout/>,
              },
              {
                path: "useUnmount",
                element: <UseUnmount/>,
              },
              {
                path: "useUpdate",
                element: <UseUpdate/>,
              },
            ],
          },
          {
            path: "/react-umi/*",
            element: <MicroApp/>,
          },
          {
            path: "/react18/*",
            element: <MicroApp/>,
          },
          {
            path: "/vue2/*",
            element: <MicroApp/>,
          },
          {
            path: "/vue3/*",
            element: <MicroApp/>,
          },
          {
            path: "/vue3-vite/*",
            element: <MicroApp/>,
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
