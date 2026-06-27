'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { wizardResponses, recommendations, programs } from '@/lib/db/schema'
import { headers } from 'next/headers'
import { eq } from 'drizzle-orm'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function saveWizardResponses(answers: Record<string, string>) {
  const userId = await getUserId()

  // Save all wizard responses
  for (const [question, answer] of Object.entries(answers)) {
    await db.insert(wizardResponses).values({
      userId,
      question,
      answer,
    })
  }

  // Generate recommendations based on answers
  await generateRecommendations(userId, answers)

  return { success: true }
}

async function generateRecommendations(
  userId: string,
  answers: Record<string, string>
) {
  // Simple recommendation logic based on answers
  // In a real app, this would use more sophisticated algorithms

  const interestToPrograms: Record<string, number[]> = {
    Technology: [1, 2, 3, 4],
    Business: [2],
    Healthcare: [],
    Engineering: [3],
    'Arts & Humanities': [],
    'Natural Sciences': [],
  }

  const interest = answers.interest || 'Technology'
  const programIds = interestToPrograms[interest] || [1, 2, 3, 4]

  // Create recommendations
  for (const programId of programIds) {
    const score = (100 - Math.random() * 15).toFixed(0) // Random score between 85-100
    await db.insert(recommendations).values({
      userId,
      programId,
      score: parseFloat(score) as any,
    })
  }
}

export async function getRecommendations() {
  const userId = await getUserId()

  const userRecommendations = await db
    .select()
    .from(recommendations)
    .where(eq(recommendations.userId, userId))

  return userRecommendations
}

export async function saveProgram(programId: number) {
  const userId = await getUserId()

  const { savedPrograms } = await import('@/lib/db/schema')

  await db.insert(savedPrograms).values({
    userId,
    programId,
  })

  return { success: true }
}

export async function getSavedPrograms() {
  const userId = await getUserId()

  const { savedPrograms } = await import('@/lib/db/schema')

  const saved = await db
    .select()
    .from(savedPrograms)
    .where(eq(savedPrograms.userId, userId))

  return saved
}
