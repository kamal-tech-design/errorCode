import { Metadata } from "next"
import HomePage from "../../components/BrandsList"
import { getAllBrand } from "../controllers/brand.controller"

export const generateMetadata = async (): Promise<Metadata> => {
  
  return {
    title: "Brand List - Appliance Error Fix",
    description: "Explore a complete list of major appliance and electronics brands with troubleshooting guides, error codes, repair tips, and maintenance advice.",
    keywords: "appliance brands, electronics brands, appliance error codes, appliance troubleshooting, appliance repair tips, home appliance brands, kitchen appliance brands, laundry appliance support, electronic device brands, appliance diagnostics",
    alternates: {
      canonical: `https://applianceerrorfix.com/err`,
    }
  }
}

export default async function Page() {
  const brands = await getAllBrand()
  return (
    <HomePage brands={brands} />
  )
}
