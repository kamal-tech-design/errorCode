import { NextRequest } from 'next/server'
import {
  getErrorDetails
} from '../../../../../controllers/brand.controller'

export async function GET(req: NextRequest, { params }: { params: { errorSlug: string } }) {
  const apiParam = await Promise.resolve(params)
  // const url = new URL(req.url)

  // const queryValue = req.nextUrl.searchParams.get('page')?.trim() || ''
  
  // console.log(queryValue, '===queryValue===')
  
  const data = await getErrorDetails(String(apiParam.errorSlug))
  return (data)
}
