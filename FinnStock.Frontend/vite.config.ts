import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //   root: path.join(__dirname, "public"),
  server: {
    port: 3000,
  },
});
