import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg"; // Import the Pool class from 'pg'

import { env } from "@/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  // The connection object is now a Pool
  pool: Pool | undefined;
};

// Use a connection Pool for robust connection management
export const pool =
  globalForDb.pool ??
  new Pool({
    // The connection string is read from the environment variable
    connectionString: env.DATABASE_URL,
  });

if (env.NODE_ENV !== "production") globalForDb.pool = pool;

// Pass the pool and schema to the drizzle function
export const db = drizzle(pool, { schema });