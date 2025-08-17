import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { StudentProvider } from "./store/studentContext";
import DashBoard from "./pages/DashBoard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <DashBoard /> },
      { path: "students", element: <StudentList /> },
      { path: "add-student", element: <AddStudent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StudentProvider>
      <RouterProvider router={router} />
    </StudentProvider>
  </React.StrictMode>
);
