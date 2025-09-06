import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function saveQuery(data: {
  name?: string
  email: string
  queryText: string
  contactNumber?: string
}) {
  try {
    const saved = await prisma.queryForm.create({
      data: {
        name: data.name,
        email: data.email,
        queryText: data.queryText,
        contactNumber: data.contactNumber,
      },
    })

    return saved
  } catch (error) {
    return {
      message: 'Failed to save query',
      error,
    }
  }
}
