"use client"
import { RocketLaunchIcon } from "@heroicons/react/24/outline"

export default function ContactToTech() {
  
  return (
    <section className="py-10 px-1 rounded-lg">
      {/* When to Contact a Technician Section */}
      <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        <RocketLaunchIcon className="w-6 h-6 text-pink-500 mr-2" />
        When to Contact a Technician
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        If you experience any of the following issues even after completing the recommended troubleshooting steps,
        please contact an authorized service technician or our support team for further assistance.
      </p>

      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        <li>The same error appears repeatedly after restarting or resetting the unit.</li>
        <li>Multiple error codes appear simultaneously.</li>
        <li>The device makes unusual noises, vibrations, or emits a burning smell.</li>
        <li>The product fails to start, operate, or complete its function despite troubleshooting.</li>
        <li>There are signs of electrical issues, physical damage, or leakage.</li>
        <li>An unknown or unlisted error code appears on the display.</li>
      </ul>
    </section>
  )
}
