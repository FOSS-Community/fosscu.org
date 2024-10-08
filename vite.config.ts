import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { config } from 'dotenv';
config();
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'process.env': process.env
  },
  server: {
    port: 8080, // Set the desired port here
  }
});