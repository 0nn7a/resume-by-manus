/* Design system: the deployment setup serves a restrained single-page editorial resume without runtime services. */
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = Boolean(repositoryName?.endsWith(".github.io"));
const pagesBase =
  process.env.VITE_BASE_URL ??
  (process.env.GITHUB_ACTIONS && repositoryName && !isUserSite ? `/${repositoryName}/` : "/");

export default defineConfig({
  root: "client",
  base: pagesBase,
  plugins: [vue()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    allowedHosts: ["5173-in5cctddlwcmnfns4yynh-4c91bfc5.sg1.manus.computer"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./client/src", import.meta.url)),
    },
  },
});
