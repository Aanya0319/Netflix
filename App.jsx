import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import Blog from "./components/Blog";
import AppLayout from "./Applayout/Applayout";
import "./App.css";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },   
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog/>},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;