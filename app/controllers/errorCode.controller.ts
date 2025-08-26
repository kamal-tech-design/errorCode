import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function getError() {
  try {
    const errors = await prisma.errorCode.findMany({
      take: 30
    })
    return NextResponse.json(errors, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch errors', error }, { status: 500 })
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
        ap.shortName as appliance,
        ec.slug, 
        ec.errorId, 
        ec.title, 
        ec.description, 
        ec.erCode
      FROM errorCode ec
      LEFT JOIN brands bd ON ec.brandId = bd.id
      LEFT JOIN appliance ap ON ec.applianceId = ap.id
      WHERE MATCH(ec.title, ec.description, ec.erCode, ec.inverterType)
        AGAINST (? IN NATURAL LANGUAGE MODE)
      LIMIT 50
    `, queryWords)
      console.log('Results:', results)
    return NextResponse.json(results, { status: 200 })
  } catch (error) {
     console.error('Error fetching errors:', error);
    return NextResponse.json({ message: 'Failed to fetch errors', error }, { status: 500 })
  }
}

// export async function getErrorById(id: number) {
//   try {
//     const error = await prisma.errorCode.findUnique({
//       where: { id },
//     })
//     if (!error) {
//       return NextResponse.json({ message: 'Error not found' }, { status: 404 })
//     }
//     return NextResponse.json(error, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to fetch error', error }, { status: 500 })
//   }
// }

// export async function createError(req: NextRequest) {
//   try {
//     const { code, message } = await req.json()
//     const newError = await prisma.errorCode.create({
//       data: { code, message },
//     })
//     return NextResponse.json(newError, { status: 201 })
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to create error', error }, { status: 500 })
//   }
// }

// export async function updateError(req: NextRequest, id: number) {
//   try {
//     const { code, message } = await req.json()
//     const updated = await prisma.errorCode.update({
//       where: { id },
//       data: { code, message },
//     })
//     return NextResponse.json(updated, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to update error', error }, { status: 500 })
//   }
// }

// export async function deleteError(id: number) {
//   try {
//     await prisma.errorCode.delete({
//       where: { id },
//     })
//     return NextResponse.json({ message: 'Deleted successfully' }, { status: 204 })
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to delete error', error }, { status: 500 })
//   }
// }

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')

//   if (id) {
//     return getErrorById(Number(id))
//   }
  
//   return getError()
// }
