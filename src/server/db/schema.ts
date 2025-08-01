import {
  index,
  pgTableCreator, // Import the PostgreSQL table creator
  serial,         // The best type for auto-incrementing IDs in PG
  timestamp,      // The native timestamp type for PG
  varchar,        // The standard type for text with a specific length
} from "drizzle-orm/pg-core"; // <--- Import from "pg-core"

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio_${name}`);

export const posts = createTable(
  "post",
  {
    // `serial` is the PostgreSQL equivalent of an auto-incrementing integer.
    id: serial("id").primaryKey(),

    // `varchar` is the standard for text with a defined length.
    name: varchar("name", { length: 256 }),

    // Use the native `timestamp` type. `defaultNow()` sets the default to the current time.
    // Note: It's a common convention in SQL to use snake_case for column names.
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),

    // The `$onUpdate` hook is not a standard feature in pg-core.
    // The best practice is to update this field manually in your application code
    // whenever you perform an update operation.
    updatedAt: timestamp("updated_at", { withTimezone: true }),
  },
  (table) => ({
    // Index syntax is very similar.
    nameIdx: index("name_idx").on(table.name),
  }),
);