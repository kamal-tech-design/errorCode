import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getError() {
  try {
    const errors = await prisma.errorcode.findMany({
      take: 30
    })
    return errors
  } catch (error) {
    return ({ message: 'Failed to fetch errors', error })
  }
}

export async function getErrorSlug() {
  try {
    // Final query
    const results = await prisma.$queryRawUnsafe(`
      SELECT 
        bd.shortName as brandSlug,
        ap.shortName as applianceSlug,
        ec.slug
      FROM errorcode ec
      LEFT JOIN brands bd ON ec.brandId = bd.id
      LEFT JOIN appliance ap ON ec.applianceId = ap.id
    `)

    return results
  } catch (error) {
    return ({ message: 'Fetching slugs from errors', error, status: 500 })
  }
}

export async function getErrorList(queryValue: string) {
  try {
    const cleanedQuery = queryValue
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .trim()

    const queryWords = cleanedQuery.split(/\s+/).join(' ') // Split by space
    // Final query
    const results = await prisma.$queryRawUnsafe(`
      SELECT 
        bd.shortName,
        ap.applianceName as appliance,
        ap.shortName as applianceSlug,
        ec.slug, 
        ec.errorId, 
        ec.title, 
        ec.description,
        ec.erCode
      FROM errorcode ec
      LEFT JOIN brands bd ON ec.brandId = bd.id
      LEFT JOIN appliance ap ON ec.applianceId = ap.id
      WHERE MATCH(ec.title, ec.description, ec.erCode, ec.otherTerm)
        AGAINST (? IN NATURAL LANGUAGE MODE)
      LIMIT 50
    `, queryWords)

    return results
  } catch (error) {
     console.error('Error fetching errors:', error);
    return ({ message: 'Failed to fetch errors', error, status: 500 })
  }
}

export async function getErrorCodeInfo(commonFixes: string) {
  // commonFixes paramater is slug
  console.log("Common Fixes Slug:", commonFixes);
  try {
    const data = await prisma.errorcode.findMany({
      include: {
        errorResolutions: true
      },
      where: {
        slug: commonFixes
      }
    })
    
    return data
  } catch (error) {
    return { message: 'Failed to fetch error details', errorDetails: error, status: 500 }
  }
}