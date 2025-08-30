import { NextRequest } from 'next/server'
import {
  getErrorDetails
} from '../../../../../controllers/brand.controller'

interface Parameter {
  params: {
    brand: string
    appliance: string
    errorSlug: string
  }
}

export async function GET(req: NextRequest, { params }: Parameter ) {
  const { brand, appliance, errorSlug } = params // No need for Promise.resolve
  
  const data = await getErrorDetails({ brand, appliance, errorSlug })
  return data
}
