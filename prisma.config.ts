/// <reference types="node" />

import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

// ✅ Force load env manually for Prisma CLI
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
