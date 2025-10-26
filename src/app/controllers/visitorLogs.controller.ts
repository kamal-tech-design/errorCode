import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function visitorLog(data: {
  ipAddress: string
  referer: string
  userAgent: string
}) {
  try {
    const saved = await prisma.visitorlogs.create({
      data: {
        ipAddress: data?.ipAddress || '',
        referer: data.referer,
        userAgent: data.userAgent
      }
    })

    return saved
  } catch (error) {
    return {
      message: 'Failed to visitor entry log',
      error
    }
  }
}
