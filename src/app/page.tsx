import HomePage from "../components/Home"
// import { getAllBrand } from "./controllers/brand.controller"

export const metadata = {
  title: "Instant Home Appliance Repair – Fix Error Codes & Get Quick Solutions | Appliance Error Fix",
  description:
    "Instantly diagnose and repair home appliances using error codes. Access guides for washers, fridges, dryers, and ovens from top brands. Fast, easy, and reliable appliance repair solutions.",
  keywords:
    "home appliance repairs, repair appliance based on error codes, appliance error fix, instant appliance repair, appliance troubleshooting, washing machine error code, fridge repair, dryer error code fix, kitchen appliance repair, electronic appliance diagnostics",
  alternates: {
    canonical: "https://applianceerrorfix.com/fix",
  },
}


export default async function Page() {
  // const brands = await getAllBrand()
  
  return (
    <HomePage />
  )
}
