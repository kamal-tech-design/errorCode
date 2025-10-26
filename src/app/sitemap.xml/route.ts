import { NextResponse } from 'next/server'
import { getErrorSlug } from '@/app/controllers/errorCode.controller'

export async function GET() {
  const baseUrl = 'https://applianceerrorfix.com'
  const brandList = ["lg", "samsung", "voltas", "blue-star", "godrej", "daikin", "panasonic", "whirlpool", "mitsubishi", "midea", "haier" ]
  const applianceslist = ["refrigerator", "air-conditioners", "washing-machine", "dishwasher", "smart-tv", "ovens-microwaves"]
  // Example: Fetch dynamic slugs from your database
  // Replace this with your actual Prisma query
  const slugData: any = await getErrorSlug() ?? [] 
  const staticRoutes = ['', 'appliance-contact', 'query-form', 'privacy-policy', 'terms-of-service', 'err']
  const applianceRoutesList: string[] = []
  const applianceErrorSlugList: string[] = []
 
 brandList.forEach((brand: string) => {
  applianceslist.forEach((appliance: string) => {
    // Base route for all combinations
    applianceRoutesList.push(`fix/${brand}/${appliance}`)
    // Filter matching slugs
    const matchingSlugs = slugData.filter(({ applianceSlug, brandSlug }: {
      applianceSlug: string;
      brandSlug: string;
    }) => {
      return applianceSlug === appliance && brandSlug?.toLowerCase() === brand.toLowerCase()
    })

    if (matchingSlugs.length > 0) {
      matchingSlugs.forEach(({ applianceSlug, brandSlug, slug }: {
        applianceSlug: string
        brandSlug: string
        slug: string
      }) => {
        applianceErrorSlugList.push(`err/${brandSlug.toLowerCase()}/${applianceSlug}/${slug}`);
      })
    } else {
      // Fallback: only add slugs where brand is 'lg' (if no matches found)
      slugData.forEach(({ applianceSlug, brandSlug, slug }: {
        applianceSlug: string
        brandSlug: string
        slug: string
      }) => {
        if (applianceSlug === appliance && brandSlug?.toLowerCase() === 'lg') {
          applianceErrorSlugList.push(`fix/${brand}/${applianceSlug}/${slug}`)
        }
      })
    }
  })
})

  const urls = [
    ...staticRoutes,
    ...brandList.map(brand => `fix/${brand}`),
    ...applianceRoutesList,
    ...applianceErrorSlugList
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(url => {
        return `
      <url>
        <loc>${baseUrl}/${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      })
      .join('')}
    </urlset>`

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  }
  
