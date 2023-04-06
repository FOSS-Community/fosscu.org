import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    port: 8080,
  },

  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
