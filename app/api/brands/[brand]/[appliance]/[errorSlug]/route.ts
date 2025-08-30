import { NextRequest } from 'next/server'
import {
  getErrorDetails
} from '../../../../../controllers/brand.controller'

interface ParamCheck {
  params: {
    // brand: string
    // appliance: string
    errorSlug: string
  }
}

interface RouteContext {
  params: ParamCheck['params'] // Ensure RouteContext's params is typed correctly
}

export async function GET(req: NextRequest, { params }: RouteContext) {
   try {
    const { errorSlug } = await Promise.resolve(params)
    const data = await getErrorDetails({ errorSlug })
    return data
  } catch (error) {
    console.error("Error fetching data:", error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
