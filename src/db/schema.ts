import { pgTable, serial, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (products) => {
    return {
      nameIndex: uniqueIndex("name_idx").on(products.name),
    };
  }
);
