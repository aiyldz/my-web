import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import MainLayout from "./MainLayout.tsx";
import Home from "./screens/Home.tsx";
import About from "./screens/About.tsx";
import Project from "./screens/Projects.tsx";
import Contact from "./screens/Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project></Project>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
