import { getError, getErrorList } from '../../controllers/errorCode.controller'

// to get all brands
export async function GET(req: Request) {
  // Extract the query parameter from the request URL
  const url = new URL(req.url)
  const queryValue = url.searchParams.get('query')?.trim() || ''
  
  if (queryValue) {
    const resultQuery = await getErrorList(queryValue)
    if (!resultQuery) {
      return new Response(JSON.stringify({ message: 'No error codes found' }), { status: 404 })
    }
    return resultQuery
  }

  return getError()
}
