import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GifsApp } from "./components";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GifsApp />
    </StrictMode>
);
