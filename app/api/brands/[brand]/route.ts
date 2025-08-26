import { NextRequest } from 'next/server'
import {
  getApplianceByBrand
} from '../../../controllers/brand.controller'

// The 'appliance' route parameter contains the brand name used to fetch the corresponding appliance list
export async function GET(req: NextRequest, context : { params: { brand: string } }) {
  const apiParam = await Promise.resolve(context)

  if (!apiParam.params?.brand) {
    console.error('Invalid route parameters:', { ...apiParam })
    return new Response('Invalid route', { status: 400 })
  }

  const data = await getApplianceByBrand(String(apiParam.params.brand))
  return (data)
}
