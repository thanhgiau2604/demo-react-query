import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import Content from "./pages/content";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contents",
      element: <Content />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
