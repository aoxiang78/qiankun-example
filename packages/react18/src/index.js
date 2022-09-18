import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const { APP_NAME, NODE_ENV } = process.env

let root
function render(props) {
  const { container } = props;

  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  if (NODE_ENV === 'development') {
    console.log(`[${APP_NAME}] app bootstrap`)
  }
}

export async function mount(props) {
  if (NODE_ENV === 'development') {
    console.log(`[${APP_NAME}] app mount props from main framework`, props)
  }
  render(props);
}

export async function unmount(props) {
  if (NODE_ENV === 'development') {
    console.log(`[${APP_NAME}] app unmount props from main framework`, props)
  }
  const { container } = props;
  root.unmount(container ? container.querySelector('#root') : document.getElementById('root'));
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
