import { Metadata } from "next"
import CommonFixes from "./commonFixes"
import { getErrorCodeInfo } from "../controllers/errorCode.controller"

export const generateMetadata = async (): Promise<Metadata> => {
  
  return {
    title: 'How to Reset Common Home Appliances – Step-by-Step Troubleshooting Guide - Appliance Error Repair',
    description: 'Learn how to safely reset your washer, dryer, refrigerator, dishwasher, and oven with our detailed step-by-step instructions. Restore your appliance performance and clear error codes easily.',
    alternates: {
      canonical: 'https://applianceerrorfix.com/how-to-reset-common-home-appliances',
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
