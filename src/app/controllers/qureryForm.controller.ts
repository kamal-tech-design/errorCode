import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function saveQuery(data: {
  name?: string
  email: string
  queryText: string
  contactNumber?: string
  errorId?: number
}) {
  try {
    const saved = await prisma.queryform.create({
      data: {
        name: data?.name || '',
        email: data.email,
        queryText: data.queryText,
        contactNumber: data?.contactNumber || '',
        errorId: data?.errorId ? Number(data.errorId) : 0
      }
    })

    return saved
  } catch (error) {
    return {
      message: 'Failed to save query',
      error
    }
  }
}
