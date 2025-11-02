
interface ErrorResolution {
  resolutionid: number
  errorId: number
  brandId: number
  title: string
  description: string
  contentOrder: number
  other: string
  section?: string
}

interface ErrorDetail {
  errorId: number
  brandId: number
  modalId: number
  featureId: number
  applianceId: number
  erCode: string
  otherTerm: string
  slug: string
  title: string
  description: string
  inverterType: string
  errorType: string
  errorResolutions: ErrorResolution[]
}

interface Props {
  errorInfo: ErrorDetail[] | any
}

export default function CommonFixes({
  errorInfo,
}: Props) {
  console.log("Error Info:", errorInfo);
  if (!errorInfo || errorInfo.length === 0) {
    return <p className="text-gray-500 text-center py-8">No error details available.</p>
  }

  return (
    <article className="p-10 bg-gradient-to-b from-[#EAF8FB] text-gray-700 w-full max-w-4xl mx-auto rounded-lg overflow-x-auto">
       
       <h1 className="text-3xl font-bold mb-6">
          🏠 How to Reset Common Home Appliances: Step-by-Step Guide
        </h1>

        <p className="mb-4">
          If your home appliances are acting up—whether it’s a{" "}
          <strong>washing machine not starting</strong>, a{" "}
          <strong>refrigerator showing an error code</strong>, or an{" "}
          <strong>oven not heating properly</strong>—you may just need to reset
          them. Resetting can fix software glitches, restore factory settings,
          and bring your appliance back to normal.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">🔌 Why Resetting Helps</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Clears temporary software or sensor errors</li>
            <li>Restores default factory settings</li>
            <li>Reconnects the appliance to power or Wi-Fi</li>
            <li>Helps troubleshoot error codes before calling a technician</li>
          </ul>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            💡 Pro Tip: Always unplug your appliance for at least 1–5 minutes
            before resetting to discharge internal circuits.
          </blockquote>
        </section>

        {/* Washing Machine */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            🧺 1. How to Reset a Washing Machine
          </h2>
          <p className="mb-3">
            Modern washers often face issues like <strong>error codes</strong> or
            <strong> stuck cycles</strong>. Here’s how to reset them:
          </p>
          <ol className="list-decimal ml-6 mb-4">
            <li>Unplug the washing machine from the outlet.</li>
            <li>Wait 1–3 minutes.</li>
            <li>
              Plug it back in and open/close the washer lid six times within 12
              seconds (for Whirlpool and similar models).
            </li>
            <li>Restart your wash cycle.</li>
          </ol>
          <p>
            For smart washers, hold <strong>Start/Pause</strong> and{" "}
            <strong>Power</strong> for 5–10 seconds.
          </p>
        </section>

        {/* Refrigerator */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            🧊 2. How to Reset a Refrigerator
          </h2>
          <ol className="list-decimal ml-6 mb-4">
            <li>Unplug the refrigerator and wait 5 minutes.</li>
            <li>
              Plug it back in and hold <strong>Power Cool</strong> +{" "}
              <strong>Power Freeze</strong> for 10 seconds (Samsung models).
            </li>
            <li>
              For LG or Whirlpool, press the <strong>Reset/Filter Reset</strong>{" "}
              button for 3–5 seconds.
            </li>
          </ol>
        </section>

        {/* Dishwasher */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            🍽️ 3. How to Reset a Dishwasher
          </h2>
          <ol className="list-decimal ml-6 mb-4">
            <li>Unplug or switch off the circuit breaker.</li>
            <li>Wait 1–2 minutes.</li>
            <li>
              Plug it back in and press <strong>Start/Reset</strong> for 3
              seconds.
            </li>
            <li>
              Wait for the <strong>“End”</strong> light to turn off before
              starting a new cycle.
            </li>
          </ol>
        </section>

        {/* Oven */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            🍳 4. How to Reset an Oven or Range
          </h2>
          <ol className="list-decimal ml-6 mb-4">
            <li>Turn off and unplug the oven (or breaker off).</li>
            <li>Wait 5 minutes, then plug it back in.</li>
            <li>
              Press and hold <strong>Bake</strong> + <strong>Broil</strong> for
              3 seconds, then press <strong>Clear/Off</strong>.
            </li>
          </ol>
          <p>
            For smart ovens, use the manufacturer’s app to perform a digital
            reset.
          </p>
        </section>

        {/* Air Conditioner */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            🌬️ 5. How to Reset an Air Conditioner
          </h2>
          <ol className="list-decimal ml-6 mb-4">
            <li>Turn off the AC and thermostat.</li>
            <li>Find the red <strong>Reset</strong> button on the compressor.</li>
            <li>Hold it for 3–5 seconds.</li>
            <li>Turn power back on and set your temperature.</li>
          </ol>
        </section>

        {/* General Tips */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            ⚙️ General Reset Tips for All Appliances
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Check your user manual for model-specific steps.</li>
            <li>Verify that the circuit breaker hasn’t tripped.</li>
            <li>Perform regular maintenance to prevent issues.</li>
            <li>Use surge protectors to protect electronics.</li>
          </ul>
        </section>
    </article>
  )
}
