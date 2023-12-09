import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [ tsConfigPaths() ],
	test: {
		globals: true,
		include: ["**/*.e2e.?(c|m)[jt]s?(x)"],
		exclude: ["node_modules", "build"]
	}
});