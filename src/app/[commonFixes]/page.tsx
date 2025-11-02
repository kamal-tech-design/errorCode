import { Metadata } from "next"
import CommonFixes from "./commonFixes"
import { getErrorCodeInfo } from "../controllers/errorCode.controller"

export const generateMetadata = async (): Promise<Metadata> => {
  
  return {
    title: "Brand List - Appliance Error Fix",
    description: "Explore a complete list of major appliance and electronics brands with troubleshooting guides, error codes, repair tips, and maintenance advice.",
    keywords: "appliance brands, electronics brands, appliance error codes, appliance troubleshooting, appliance repair tips, home appliance brands, kitchen appliance brands, laundry appliance support, electronic device brands, appliance diagnostics",
    alternates: {
      canonical: `https://applianceerrorfix.com/fix`,
    }
  }
}

export default async function TroubleshootPage({ params }: { params: { commonFixes: string } }) {
  const { commonFixes } = await Promise.resolve(params)
  // commonFixes paramater is slug
  if (!commonFixes) {  // Handle case where brands parameter is missing
    console.error('Brands parameter is missing in the request')
    return null
  }
  
  const errorInfo = await getErrorCodeInfo(commonFixes)
  return (
    <CommonFixes errorInfo={errorInfo} />
  )
}
