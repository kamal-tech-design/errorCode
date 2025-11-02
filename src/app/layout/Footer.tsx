import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="max-w-5xl container mx-auto px-4 flex flex-row text-center gap-6 mb-5 justify-between">   
          {/* Logo & Tagline Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-sm">
          <div className="flex items-center gap-2">
            <img
              style={{ width: '155px' }}
              src="/images/appliance_fix_error_logo.png"
              alt="Not Found"
              className="max-w-md mt-2 mx-auto"
            />
          </div>
          <p className="text-gray-400 text-sm italic">
            Technicians may grumble, but customers love how fast Error Fix solves appliance issues!
           <br/> Save money on repairs and learn how to repair common issues yourself
          </p> 
        </div>
        {/* Policy Section */}
        <div className="flex flex-col gap-2 menu-link">
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
        {/* Top Section */}
        <div className="flex flex-col gap-2 common-error-link">
          <Link href="/how-to-reset-common-home-appliances" className="hover:underline">
            How to reset common home appliances?
          </Link>
          <Link href="/common-error-code" className="hover:underline">
            Common appliance error codes
          </Link>
          <Link href="/fix/lg/washing-machine" className="hover:underline">
            Washing-machine error codes
          </Link>
          <Link href="/fix/lg/air-conditioner" className="hover:underline">
            LG AC error codes
          </Link>
        </div>
      </div>
      
        {/* Divider */}
        <div className="w-full border-t border-gray-700"></div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center mt-4">
          &copy; 2025 All rights reserved.
        </p>
    </footer>
  );
}

export default Footer;
