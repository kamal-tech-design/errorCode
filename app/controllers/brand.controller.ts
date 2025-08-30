import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

// Initialize Prisma client
const prisma = new PrismaClient()

/**
 * Fetch all available brands from the database.
 * @returns JSON response with a list of brand objects.
 */
export async function getAllBrand() {
  try {
    const brandsObj = await prisma.brands.findMany()
    return NextResponse.json(brandsObj, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch all brands', error }, { status: 500 })
  }
}

/**
 * Get all appliances associated with a specific brand.
 * @param brand - The brand name to filter appliances by.
 * @returns JSON response with a list of appliances for the given brand.
 */
export async function getApplianceByBrand(brand: string) {
  try {
    const brandsObj = await prisma.appliance.findMany({
      where: {
        brandName: brand,
      }
    })
    return NextResponse.json(brandsObj, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch appliance', error }, { status: 500 })
  }
}

/**
 * Find a single appliance by its brand and appliance name.
 * @param brand - Brand name.
 * @param appliance - Appliance name.
 * @returns The first matching appliance object or null if not found.
 */
export async function findApplianceInfoByBrandAndAppliance(brand: string, appliance: string) {
  try {
    return await prisma.appliance.findFirst({
      where: {
        brandName: brand,
        applianceName: appliance
      }
    })
  } catch (error) {
    console.error('Error fetching appliance by brand:', error)
    return null
  }
}

/**
 * Get all error codes related to a specific appliance by brand and name.
 * Combines appliance lookup and error code filtering by appliance ID.
 * @param brand - Brand name.
 * @param appliance - Appliance name.
 * @returns JSON response with a list of error codes associated with the appliance.
 */
export async function getApplianceRelatedData(brand: string, appliance: string, page: number) {
  try {
    if (!brand || !appliance) {
      return NextResponse.json({ message: 'Brand and appliance are required.' }, { status: 400 })
    }

    const applianceInfo = await findApplianceInfoByBrandAndAppliance(brand, appliance)
    const applianceId = applianceInfo?.id

     const whereCondition: {
      where?: {
        applianceId?: number
      }
    } = applianceId ? {
      where: {
        applianceId: applianceId
      }
    } : {}

    const totalCount: any = await prisma.errorCode.count({
      ...whereCondition
    })

    const limit = 20
    const errorListObj = await prisma.errorCode.findMany({
      ...whereCondition,
      skip: (page - 1) * limit,
      take: limit
    })

    return NextResponse.json({
      data: errorListObj,
      meta: {
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount
      }
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to fetch appliance-related error list', error },
      { status: 500 }
    )
  }
}

/**
 * Fetch detailed information about a specific error by its slug.
 * Also includes related resolutions from the `errorResolutions` relation.
 * @param errorSlug - The unique slug identifier of the error code.
 * @returns JSON response with error details and any associated resolutions.
 */
export async function getErrorDetails({ brand, appliance, errorSlug }: { errorSlug: string, brand:string, appliance: string }) {
  try {
    const errorDetailsObj = await prisma.errorCode.findMany({
      include: {
        errorResolutions: true
      },
      where: {
        slug: errorSlug
      }
    })

    return NextResponse.json(errorDetailsObj, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch error details', error }, { status: 500 })
  }
}
