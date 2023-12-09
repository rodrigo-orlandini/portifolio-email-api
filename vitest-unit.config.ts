import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [ tsConfigPaths() ],
	test: {
		globals: true,
		include: ["**/*.spec.?(c|m)[jt]s?(x)"],
		exclude: ["node_modules", "build"]
	}
});