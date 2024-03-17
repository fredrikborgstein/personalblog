import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPostSection from "./components/BlogPostSection.tsx";
import Contact from "./components/Contact.tsx";
import About from "./components/About.tsx";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/blog", element: <BlogPostSection /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
