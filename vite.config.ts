import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, "popup.html"),
        background: path.resolve(__dirname, "src/background/background.ts"),
        content: path.resolve(__dirname, "src/content/content.tsx")
      },
      output: {
        // entryFileNames: "assets/[name].js",
        entryFileNames: ({ name }) => {
          if (name === "background") {
            return "assets/background/background.js";
          }
          else if (name === "content") {
            return "assets/content/content.js";
          }
          return "assets/[name].js";
        }
      }
    },
    outDir: "dist",
    sourcemap: true, // Only for Development, false in production
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
