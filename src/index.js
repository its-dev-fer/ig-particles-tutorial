import "./app.scss";

// Archivo de configuración
import options from "./PJS-settings";
// Librería de Particles js
require("particles.js");
document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", options);
});
