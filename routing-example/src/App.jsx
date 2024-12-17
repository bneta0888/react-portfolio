import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About/>
    },
    { 
      path: "/contact",
      element: <Contact/>
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>
  
}