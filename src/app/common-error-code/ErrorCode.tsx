'use client'

const CommonErrorCodes = ({ errorId }: { errorId?: string}) => {

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-3">
          Most Common Appliance Error Codes (Across All Brands)
        </h1>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Most appliance brands—such as LG, Samsung, Whirlpool, Bosch, and Haier—use different
          numbering systems for error codes. However, many of the underlying issues are
          similar across all brands and appliance types, including washing machines, refrigerators,
          air conditioners, microwaves, and dishwashers.
        </p>

        {/* 1. Power / Electrical Errors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-grey-900 mb-4">
            🔌 Power / Electrical Errors
          </h2>
          <p className="text-gray-700 mb-4">
            These errors occur due to unstable power supply or internal electrical faults.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> E1, E2, F1, F2, P1, PF, U4
            </li>
            <li>
              <strong>Meaning:</strong> Voltage too high/low, power interruption, or board failure.
            </li>
            <li>
              <strong>Applies To:</strong> All appliances.
            </li>
          </ul>
        </div>

        {/* 2. Water Supply / Drainage Errors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-grey-900 mb-4">
            💧 Water Supply / Drainage Errors
          </h2>
          <p className="text-gray-700 mb-4">
            Often related to clogged hoses, low water pressure, or faulty valves.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> E3, E5, OE, F5, F8, IE, 5E
            </li>
            <li>
              <strong>Meaning:</strong> Water inlet, drainage, or leakage issue.
            </li>
            <li>
              <strong>Applies To:</strong> Washing machines, dishwashers.
            </li>
          </ul>
        </div>

        {/* 3. Temperature / Sensor Errors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-grey-900 mb-4">
            🌡️ Temperature / Sensor Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> E6, E7, F3, F4, tE, H1, HE, H2
            </li>
            <li>
              <strong>Meaning:</strong> Faulty temperature sensor or overheating.
            </li>
            <li>
              <strong>Applies To:</strong> Refrigerators, air conditioners, dryers, ovens.
            </li>
          </ul>
        </div>

        {/* 4. Motor / Drive Errors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-grey-900 mb-4">
            ⚙️ Motor / Drive Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> LE, E9, E51, F06, E10, E20
            </li>
            <li>
              <strong>Meaning:</strong> Motor not rotating or communication failure.
            </li>
            <li>
              <strong>Applies To:</strong> Washers, dryers, dishwashers, air conditioners.
            </li>
          </ul>
        </div>

        {/* 5. Airflow / Cooling Errors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-grey-900 mb-4">
            💨 Airflow / Cooling Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> E1, F1, CH05, H6, EC
            </li>
            <li>
              <strong>Meaning:</strong> Faulty fan, poor airflow, or overheating.
            </li>
            <li>
              <strong>Applies To:</strong> Air conditioners, refrigerators, dryers.
            </li>
          </ul>
        </div>

        {/* 6. Communication / Control Board Errors */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            💻 Communication / Control Board Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> E0, E99, EC, F9, U4, CF
            </li>
            <li>
              <strong>Meaning:</strong> Communication failure between main PCB and display.
            </li>
            <li>
              <strong>Applies To:</strong> All smart appliances.
            </li>
          </ul>
        </div>

        {/* 7. Door / Lid / Safety Lock Errors */}
        <div className="">
          <h2 className="text-2xl font-semibold text-grey-900 mb-4">
            🧠 Door / Lid / Safety Lock Errors
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Common Codes:</strong> dE, DL, E01, F22, LC, E4
            </li>
            <li>
              <strong>Meaning:</strong> Door not closed properly or lock malfunction.
            </li>
            <li>
              <strong>Applies To:</strong> Washers, dryers, dishwashers, ovens.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CommonErrorCodes
