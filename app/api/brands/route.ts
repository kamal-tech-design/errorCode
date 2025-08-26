import { getAllBrand } from '../../controllers/brand.controller'

// to get all brands
export async function GET(req: Request) {
 
  return getAllBrand()
}
