export default function Term() {  
  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-12 font-sans text-gray-900 bg-white">
      <article>
        {/* Main Heading with Correct Role */}
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions - Appliance Error Fix</h1>

        <p className="mb-6">
          Welcome to <strong>Appliance Error Fix</strong>. These Terms and Conditions (“Terms”) govern your use of our application and services that provide information, error codes, and solutions related to home appliances such as smart TVs, washing machines, air conditioners, dishwashers, and more.
        </p>

        <p className="mb-8">
          By accessing or using <strong>Appliance Error Fix</strong> (“we,” “us,” or “our”), you agree to these Terms. Please read them carefully. If you do not agree, please do not use our services.
        </p>

        {/* Section 1 */}
        <section className="mb-8" id="nature-of-content">
          <h2 className="text-2xl font-semibold mb-4">1. Nature of the Content</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>The information, error codes, causes, and solutions provided are gathered from public sources for informational purposes only.</li>
            <li>We strive for accuracy but <strong>do not guarantee completeness, reliability, or suitability</strong> for your specific situation.</li>
            <li>This is <strong>not a substitute for professional appliance repair advice</strong>. Always consult certified technicians for serious issues.</li>
            <li>This content is not affiliated with or endorsed by any appliance manufacturer or brand.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-8" id="liability-disclaimer">
          <h2 className="text-2xl font-semibold mb-4">2. Disclaimer of Liability</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Your use of this information is at your own risk.</li>
            <li>We are not liable for any damages resulting from your use of the app or its content.</li>
            <li>We do not accept responsibility for any property damage or injury caused by reliance on this content.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8" id="intellectual-property">
          <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All app design, layout, and code are the property of Appliance Error Fix or its licensors.</li>
            <li>You may not copy, reuse, or distribute proprietary content without written permission.</li>
            <li>Some content is sourced from third parties and AI tools and remains subject to their original copyright.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8" id="user-submissions">
          <h2 className="text-2xl font-semibold mb-4">4. User Submissions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>By submitting feedback or content, you grant us a license to use and distribute it.</li>
            <li>Submitted content must be lawful and not infringe third-party rights.</li>
            <li>We reserve the right to remove content that violates our Terms.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-8" id="privacy-policy">
          <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
          <p>
            Your use of this app is also subject to our{' '}
            <a href="/privacy-policy" className="text-blue-600 underline" rel="nofollow">
              Privacy Policy
            </a>, which explains how we collect, use, and protect your information.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8" id="modifications">
          <h2 className="text-2xl font-semibold mb-4">6. Modifications to Terms</h2>
          <p>
            We may update these Terms at any time. Updates will be posted here with the revised effective date. Continued use indicates acceptance of changes.
          </p>
        </section>

        {/* Optional Governing Law Section - Uncomment if needed
        <section className="mb-8" id="governing-law">
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Your Country/State]. Disputes will be resolved in the courts of [Your Location].
          </p>
        </section>
        */}

        {/* Section 8 */}
        <section className="mb-12" id="contact-info">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <address className="not-italic">
            If you have any questions regarding these Terms, contact us at:<br />
            <a href="mailto:kamaltech2023@gmail.com" className="text-blue-600 underline">
              kamaltech2023@gmail.com, abcd@xyz.com
            </a>
            <br />
            Kamal Kumar, Abcd
          </address>
        </section>

        <p className="text-sm italic">
          By using <strong>Appliance Error Fix</strong>, you agree to comply with these Terms and Conditions.
        </p>
      </article>
    </main>
  )
}
