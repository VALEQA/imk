import { pgTable, text, timestamp, boolean, serial, integer, decimal, jsonb } from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables: StudiKompas ------------------------------------------------

// User role and profile information
export const userProfile = pgTable('userProfile', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  role: text('role').notNull().default('student'), // 'student', 'counselor', 'admin'
  university: text('university'),
  major: text('major'),
  interests: jsonb('interests'),
  gpa: decimal('gpa', { precision: 3, scale: 2 }),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// Universities offering programs
export const universities = pgTable('universities', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
  location: text('location').notNull(),
  description: text('description'),
  website: text('website'),
  contactEmail: text('contactEmail'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Study programs offered by universities
export const programs = pgTable('programs', {
  id: serial('id').primaryKey(),
  universityId: integer('universityId').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  duration: integer('duration'), // months
  tuition: decimal('tuition', { precision: 12, scale: 2 }),
  requirements: jsonb('requirements'),
  career_outcomes: jsonb('careerOutcomes'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Wizard quiz answers (for Smart Wizard feature)
export const wizardResponses = pgTable('wizardResponses', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Program recommendations from wizard
export const recommendations = pgTable('recommendations', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  programId: integer('programId').notNull(),
  score: decimal('score', { precision: 3, scale: 2 }),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Chat conversations between students and counselors
export const chatConversations = pgTable('chatConversations', {
  id: serial('id').primaryKey(),
  studentId: text('studentId').notNull(),
  counselorId: text('counselorId'),
  status: text('status').notNull().default('open'), // 'open', 'closed'
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// Chat messages
export const chatMessages = pgTable('chatMessages', {
  id: serial('id').primaryKey(),
  conversationId: integer('conversationId').notNull(),
  userId: text('userId').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})

// Consultation ticket system
export const consultationTickets = pgTable('consultationTickets', {
  id: serial('id').primaryKey(),
  studentId: text('studentId').notNull(),
  counselorId: text('counselorId'),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status').notNull().default('pending'), // 'pending', 'assigned', 'completed'
  priority: text('priority').notNull().default('normal'), // 'low', 'normal', 'high'
  scheduledDate: timestamp('scheduledDate'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// Student saved programs (bookmarks/favorites)
export const savedPrograms = pgTable('savedPrograms', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  programId: integer('programId').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
})
