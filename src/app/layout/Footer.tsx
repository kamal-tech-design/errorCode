import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 flex flex-col items-center gap-2">
      <div className="flex gap-6">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/appliance-contact" className="hover:underline">
          Contact Us
        </Link>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        &copy; 2025 All rights reserved.
      </p>
    </footer>
)
}
export default Footer