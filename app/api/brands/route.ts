import { getAllBrand } from '../../controllers/brand.controller'

// to get all brands
export async function GET(req: Request) {
  // console.log('==trying to get brand==')
  return getAllBrand()
}
