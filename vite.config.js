import { defineConfig } from "vite";

export default defineConfig({
  base: "/SonicWave/", // Cambia 'nombre-del-repositorio' por el nombre de tu repositorio en GitHub
  build: {
    outDir: "docs", // Esto asegura que los archivos de construcción se colocarán en la carpeta 'docs'
  },
});
