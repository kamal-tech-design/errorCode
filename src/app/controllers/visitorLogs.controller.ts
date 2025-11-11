import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function visitorLog(data: {
  likes?: string
  unLikes?: string
  ipAddress: string
  referer: string
  userAgent: string
}) {
  try {
    try {
      await prisma.visitorlogs.create({
        data: {
          ipAddress: data?.ipAddress || '',
          referer: data.referer,
          userAgent: data.userAgent,
          likes: data?.likes ? 1 : 0,
          unLikes: data?.unLikes ? 1 : 0
        }
      })
    }  catch (error) {
      console.error('Error saving visitor log:', error)
      throw error
    }
  } catch (error) {
    return {
      message: 'Failed to visitor entry log',
      error
    }
  }
}
