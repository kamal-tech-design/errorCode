import { NextRequest } from 'next/server'
import {
  getApplianceRelatedData
} from '../../../../controllers/brand.controller'

export async function GET(req: NextRequest, { params }: { params: { brand: string, appliance: string, page: number, limit: number } }) {
  const apiParam = await Promise.resolve(params)
  const url = new URL(req.url)
  const page = Number(url.searchParams.get('page')?.trim() || 0)

  const data = await getApplianceRelatedData(apiParam.brand, apiParam.appliance, page)
  return (data)
}
