import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root') as Element;

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
    </script>

    <RouterProvider router={router} />
  </React.StrictMode>
);