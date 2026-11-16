import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The app is served from https://kaligulai.github.io/react-meer-chess/
  base: "/react-meer-chess/",
});
