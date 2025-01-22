import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.xlsx"], // Add this line to include .xlsx files as assets
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
