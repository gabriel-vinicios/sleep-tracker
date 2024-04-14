import type { Config, defineConfig } from "drizzle-kit";
export default {
  schema: "./src/schema.ts",
  out: "./drizzle/migrations",
} satisfies Config;