import { NextRequest, NextResponse } from 'next/server'
import { getError, getErrorList } from '../../controllers/errorCode.controller'

// to get all brands
export async function GET(req: NextRequest) {
  // Extract the query parameter from the request URL
  const url = new URL(req.url)
  const queryValue = url.searchParams.get('query')?.trim() || ''
  
  if (queryValue) {
    const data = await getErrorList(queryValue)
    if (!data) {
      return NextResponse.json({ message: 'No error codes found', status: 404 })
    }
    return NextResponse.json({ data })
  }

  const data = await getError()
  if (!data) {
    return NextResponse.json({ message: 'No error codes found', status: 404 })
  }

  return NextResponse.json({ data })
}
