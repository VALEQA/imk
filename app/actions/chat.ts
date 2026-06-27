'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { chatConversations, chatMessages, consultationTickets } from '@/lib/db/schema'
import { headers } from 'next/headers'
import { eq, and } from 'drizzle-orm'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function createChatConversation() {
  const userId = await getUserId()

  const conversation = await db
    .insert(chatConversations)
    .values({
      studentId: userId,
      status: 'open',
    })
    .returning()

  return conversation[0]
}

export async function sendChatMessage(conversationId: number, message: string) {
  const userId = await getUserId()

  const msg = await db
    .insert(chatMessages)
    .values({
      conversationId,
      userId,
      message,
    })
    .returning()

  return msg[0]
}

export async function getConversationMessages(conversationId: number) {
  const userId = await getUserId()

  // Verify user has access to this conversation
  const conversation = await db
    .select()
    .from(chatConversations)
    .where(
      and(
        eq(chatConversations.id, conversationId),
        eq(chatConversations.studentId, userId)
      )
    )

  if (!conversation.length) throw new Error('Unauthorized')

  const messages = await db
    .select()
    .from(chatMessages)
    .where(eq(chatMessages.conversationId, conversationId))

  return messages
}

export async function createConsultationTicket(
  title: string,
  description: string,
  priority: 'low' | 'normal' | 'high' = 'normal'
) {
  const userId = await getUserId()

  const ticket = await db
    .insert(consultationTickets)
    .values({
      studentId: userId,
      title,
      description,
      priority,
      status: 'pending',
    })
    .returning()

  return ticket[0]
}

export async function getConsultationTickets() {
  const userId = await getUserId()

  const tickets = await db
    .select()
    .from(consultationTickets)
    .where(eq(consultationTickets.studentId, userId))

  return tickets
}

export async function updateTicketStatus(
  ticketId: number,
  status: 'pending' | 'assigned' | 'completed'
) {
  const userId = await getUserId()

  // Verify user owns this ticket
  const ticket = await db
    .select()
    .from(consultationTickets)
    .where(
      and(
        eq(consultationTickets.id, ticketId),
        eq(consultationTickets.studentId, userId)
      )
    )

  if (!ticket.length) throw new Error('Unauthorized')

  const updated = await db
    .update(consultationTickets)
    .set({ status })
    .where(eq(consultationTickets.id, ticketId))
    .returning()

  return updated[0]
}
