'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { programs, universities, recommendations, savedPrograms } from '@/lib/db/schema'
import { headers } from 'next/headers'
import { eq, like, and } from 'drizzle-orm'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function searchPrograms(
  searchTerm?: string,
  field?: string,
  limit = 20,
  offset = 0
) {
  let query = db.select().from(programs)

  if (searchTerm) {
    query = query.where(
      like(programs.name, `%${searchTerm}%`)
    )
  }

  const results = await query.limit(limit).offset(offset)
  return results
}

export async function getProgramById(id: number) {
  const result = await db
    .select()
    .from(programs)
    .where(eq(programs.id, id))

  if (!result.length) return null
  return result[0]
}

export async function getAllUniversities() {
  const result = await db.select().from(universities)
  return result
}

export async function getUniversityPrograms(universityId: number) {
  const result = await db
    .select()
    .from(programs)
    .where(eq(programs.universityId, universityId))

  return result
}

export async function getUserRecommendations() {
  const userId = await getUserId()

  const userRecommendations = await db
    .select({
      id: recommendations.id,
      programId: recommendations.programId,
      score: recommendations.score,
      program: programs,
    })
    .from(recommendations)
    .innerJoin(programs, eq(recommendations.programId, programs.id))
    .where(eq(recommendations.userId, userId))

  return userRecommendations
}

export async function getUserSavedPrograms() {
  const userId = await getUserId()

  const saved = await db
    .select({
      id: savedPrograms.id,
      program: programs,
    })
    .from(savedPrograms)
    .innerJoin(programs, eq(savedPrograms.programId, programs.id))
    .where(eq(savedPrograms.userId, userId))

  return saved
}

export async function isSaved(programId: number): Promise<boolean> {
  const userId = await getUserId()

  const result = await db
    .select()
    .from(savedPrograms)
    .where(
      and(
        eq(savedPrograms.userId, userId),
        eq(savedPrograms.programId, programId)
      )
    )

  return result.length > 0
}

export async function toggleSaveProgram(programId: number) {
  const userId = await getUserId()

  const existing = await db
    .select()
    .from(savedPrograms)
    .where(
      and(
        eq(savedPrograms.userId, userId),
        eq(savedPrograms.programId, programId)
      )
    )

  if (existing.length > 0) {
    // Remove if already saved
    await db
      .delete(savedPrograms)
      .where(
        and(
          eq(savedPrograms.userId, userId),
          eq(savedPrograms.programId, programId)
        )
      )
    return { saved: false }
  } else {
    // Add new save
    await db.insert(savedPrograms).values({
      userId,
      programId,
    })
    return { saved: true }
  }
}
