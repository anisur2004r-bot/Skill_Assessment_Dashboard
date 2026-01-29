import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import DashboardOverview from './Page/DashboardOverview/DashboardOverview';
import CallLogs from './Page/CallLogs/CallLogs';
import Appointment from './Page/Appointment/Appointment';
import Settings from './Page/Settings/Settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { 
        index: true, 
        element: <DashboardOverview></DashboardOverview> 
      },
      { 
        path: "calllog", 
        element: <CallLogs></CallLogs> 
      },
      { 
        path: "appointment", 
        element: <Appointment></Appointment> 
      },
      { 
        path: "settings", 
        element: <Settings></Settings>
      },
      { 
        path: "setting2", 
        element: <Appointment></Appointment>
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
