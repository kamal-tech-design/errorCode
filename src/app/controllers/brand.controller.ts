import { PrismaClient } from '@prisma/client'

// Initialize Prisma client
const prisma = new PrismaClient()

/**
 * Fetch all available brands from the database.
 * @returns JSON response with a list of brand objects.
 */
export async function getAllBrand() {
  try {
    const brands = await prisma.brands.findMany({
      where: { isActive: true },
      orderBy: { orderNumber: 'asc' }
    })
    return brands
  } catch (error) {
    return { message: 'Failed to fetch all brands', error, status: 500 }
  }
}

/**
 * Get all appliances associated with a specific brand.
 * @param brand - The brand name to filter appliances by.
 * @returns JSON response with a list of appliances for the given brand.
 */
export async function getApplianceByBrand() {
  try {
    const appliance = await prisma.appliance.findMany()
    return appliance
  } catch (error) {
    return { message: 'Failed to fetch appliance', error, status: 500 }
  }
}

/**
 * Find a single appliance by its brand and appliance name.
 * @param brand - Brand name.
 * @param appliance - Appliance name.
 * @returns The first matching appliance object or null if not found.
 */
export async function findApplianceInfo(appliance: string) {
  try {
    return await prisma.appliance.findFirst({
      where: {
        // brandName: brand,
        shortName: appliance
      }
    })
  } catch (error) {
    console.error('Error fetching appliance by brand:', error)
    return null
  }
}

/**
 * Find a single appliance by its brand and appliance name.
 * @param brand - Brand name.
 * @param appliance - Appliance name.
 * @returns The first matching appliance object or null if not found.
 */
export async function findBrandInfo(brand: string) {
  try {
    return await prisma.brands.findFirst({
      where: {
        // brandName: brand,
        shortName: brand
      }
    })
  } catch (error) {
    console.error('Error fetching brands info:', error)
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
      return ({ message: 'Brand and appliance are required.' , status: 400 })
    }

    const applianceInfo = await findApplianceInfo(appliance)
    /* start
      If brand is provided, filter error codes by brandId as well
      This allows fetching error codes for an appliance across all brands if needed
    */
    const brandInfo = await findBrandInfo(brand)
    const applianceId = applianceInfo?.id
    const getBrandsFromErrorCode = await prisma.errorcode.findFirst({
      where:{
        brandId: brandInfo?.id
      }
    })
    const brandCnd = getBrandsFromErrorCode?.brandId ? { brandId: brandInfo?.id } : {}
    // end
    // If no brand is provided, only filter by applianceId to fetch all related error codes
     const whereCondition: {
      where?: {
        applianceId?: number,
        brandId?: number
      }
    } = applianceId ? {
      where: {
        applianceId: applianceId,
        ...brandCnd
      }
    } : {}
    console.log('Where condition:', whereCondition)

    const totalCount: any = await prisma.errorcode.count({
      ...whereCondition
    })

    const limit = 20
    const errorListObj = await prisma.errorcode.findMany({
      ...whereCondition,
      skip: (page - 1) * limit,
      take: limit
    })

    return {
      data: errorListObj,
      meta: {
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
        totalItems: totalCount
      }
    }
    
  } catch (error) {
    return { message: 'Failed to fetch appliance-related error list', errorDetails: error, status: 500 }
  }
}

/**
 * Fetch detailed information about a specific error by its slug.
 * Also includes related resolutions from the `errorResolutions` relation.
 * @param errorSlug - The unique slug identifier of the error code.
 * @returns JSON response with error details and any associated resolutions.
 */
export async function getErrorDetails({ errorSlug }: { errorSlug: string }) {
  try {
    const data = await prisma.errorcode.findMany({
      include: {
        errorResolutions: true
      },
      where: {
        slug: errorSlug
      }
    })
    
    return data
  } catch (error) {
    return { message: 'Failed to fetch error details', errorDetails: error, status: 500 }
  }
}
