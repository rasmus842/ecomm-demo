import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { env } from "~/env.mjs";
import { MigrationConfig } from "drizzle-orm/migrator";

/*
const migrationClient = postgres(env.POSTGRES_CONNECTION, { max: 1 });
const migrationConfig: MigrationConfig = {
  migrationsFolder: env.MIGRATIONS_FOLDER,
};
migrate(drizzle(migrationClient), migrationConfig);
*/

const queryClient = postgres(env.POSTGRES_CONNECTION);

export const db: PostgresJsDatabase = drizzle(queryClient);
