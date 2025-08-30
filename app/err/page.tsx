import HomePage from "../../components/BrandsList"

async function getAllBrands() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/brands`, {
    // cache: 'force-cache', // or 'force-cache' if you want caching
  })

  if (!res.ok) {
    console.log('Failed to fetch error codes', res)
  }

  return res.json()
}

export const metadata = {
  title: "PalHola - Talk to strangers",
  // description: "Welcome to the Digital Store, your one-stop shop for all things digital.",
  // keywords: "digital store, online shopping, digital products, e-commerce",
}

export default async function Page() {
  const brands = await getAllBrands()
  return (
    <HomePage brands={brands} />
  )
}
