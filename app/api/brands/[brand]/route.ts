import { NextRequest } from 'next/server'
import {
  getApplianceByBrand
} from '../../../controllers/brand.controller'

interface Parameter {
   params: {
    brand: string
  }
}
// The 'appliance' route parameter contains the brand name used to fetch the corresponding appliance list
export async function GET(req: NextRequest, { params }: Parameter) {
  // console.log(params.brand, '====brand====')
  const apiParam = await Promise.resolve(params)
  if (!apiParam?.brand) {
    console.error('Invalid route parameters:', { ...apiParam })
    return new Response('Invalid route', { status: 400 })
  }

  const data = await getApplianceByBrand(String(apiParam.brand))
  return (data)
}
