import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

// ✅ Load correct environment file based on NODE_ENV:
dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

// ✅ Validate required env variables (fail fast)
if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is not defined");
  process.exit(1);
}

// ✅ Create PostgreSQL pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// ✅ Fail fast if DB connection fails (important for DevOps)
pool
  .connect()
  .then((client) => {
    console.log("✅ Database connected successfully");
    client.release(); // release immediately after test
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });

// ✅ Prisma adapter
const adapter = new PrismaPg(pool);

// ✅ Prisma client
const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

export default prisma;
