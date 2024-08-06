import { relations } from "drizzle-orm"
import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { createInsertSchema } from 'drizzle-zod'
import { z } from "zod"

export const accounts = pgTable('accounts', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull().unique(),
  userId: text('user_id').notNull(),
})

export const accountsRelations = relations(accounts, ({ many }) => ({
  transactions: many(transactions),
}))

export const insertAccountSchema = createInsertSchema(accounts, {
  name: (schema) => schema.name.min(1, {
    message: "Name is required",
  }),
})

export const categories = pgTable('categories', {
  id: text('id').primaryKey(),
  plaidId: text('plaid_id'),
  name: text('name').notNull().unique(),
  userId: text('user_id').notNull(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  transactions: many(transactions),
}))

export const insertCategorySchema = createInsertSchema(categories, {
  name: (schema) => schema.name.min(1, {
    message: "Name is required",
  }),
})

export const transactions = pgTable('transactions', {
  id: text('id').primaryKey(),
  amount: integer('amount').notNull(),
  payee: text('payee').notNull(),
  notes: text('notes'),
  date: timestamp('date', { mode: 'date' }).notNull(),
  accountId: text('account_id').references(() => accounts.id, {
    onDelete: 'cascade'
  }).notNull(),
  categoryId: text('category_id').references(() => categories.id, {
    onDelete: 'set null' // when category is deleted, set null categoryId
  }),
})

export const transactionsRelations = relations(transactions, ({ one }) => ({
  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id],
  }),
  category: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  })
}))

export const insertTransactionSchema = createInsertSchema(transactions, {
  amount: (schema) => schema.amount.int({
    message: "Amount is required",
  }),
  payee: (schema) => schema.payee.min(1, {
    message: "Payee is required",
  }),
  date: () => z.coerce.date({
    message: "Invalid date",
  }),
})