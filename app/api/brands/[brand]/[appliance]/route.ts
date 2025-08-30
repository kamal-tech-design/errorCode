import { NextRequest } from 'next/server'
import {
  getApplianceRelatedData
} from '../../../../controllers/brand.controller'

interface Parameter {
   params: {
    brand: string
    appliance: string
    page: number
    limit: number
  }
}

export async function GET(req: NextRequest, { params }: Parameter ) {
  const { brand, appliance, } = await Promise.resolve(params)
  const url = new URL(req.url)
  const page = Number(url.searchParams.get('page')?.trim() || 0)

  const data = await getApplianceRelatedData(brand, appliance, page)
  return data
}
