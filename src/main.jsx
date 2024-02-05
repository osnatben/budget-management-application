import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Admin from './component/admin/Admin.jsx';
import UpdateAdmin from './component/admin/UpdateAdmin.jsx';

import RequestsAdmin from './component/admin/RequestsAdmin.jsx';
import LogIn from './component/logIn/LogIn.jsx';
import Grid from './component/Grid.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'admin',
    element: <Admin />,
    children: [
      {
        path: "update",
        element: <UpdateAdmin/>
      },
      {
        path: ":id",
        element: <RequestsAdmin/>,
      },
    ]
    
  },
  {
    path: 'user',
    element: <Grid />
  },
  {
    path: "services",
    element: <LogIn />,//<Outlet/>
    children: [
      {
        path: "add",
        element: <div >bbb</div>,
      },
      {
        path: ":id",
        element: <div >aaaaa</div>,
      },
    ]
  },
  //   {
  // path: "about",
  //   element: <About />,
  // },
  ,

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router}

    />

  </React.StrictMode>,
)
