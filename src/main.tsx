import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from "./components/UserInfo.tsx";
import UserProfiles from "./components/UserProfiles.tsx";
import UserActivities from "./components/UserActivities.tsx";

import App from "./components/App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/userprofiles",
    element: <UserProfiles />,
  },
  {
    path: "/userActivities",
    element: <UserActivities />,
  },
  {
    path: "userprofiles/:id",
    element: <UserInfo />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
