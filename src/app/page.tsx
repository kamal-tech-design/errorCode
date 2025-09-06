import HomePage from "../components/BrandsList"
import { getAllBrand } from "./controllers/brand.controller"

export const metadata = {
  title: "PalHola - Talk to strangers",
  // description: "Welcome to the Digital Store, your one-stop shop for all things digital.",
  // keywords: "digital store, online shopping, digital products, e-commerce",
}

export default async function Page() {
  const brands = await getAllBrand()

  return (
    <HomePage brands={brands} />
  )
}
