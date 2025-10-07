const PrivacyPolicy = () => {

  return (
    <main className="w-full mx-auto p-6 sm:p-12 font-sans text-gray-900 bg-white">
      <article>
        <h1 className="text-4xl font-bold mb-6">Privacy Policy - Appliance Error Fix</h1>
        {/* <p className="mb-4 font-semibold">Last updated: [Insert Date]</p> */}

        <p className="mb-8">
          Thank you for using <strong>Appliance Error Fix</strong>. This Privacy Policy explains how we collect,
          use, and protect your information when you interact with our app, including submitting queries or feedback
          through our contact form.
        </p>

        {/* Section 1 */}
        <section className="mb-8" id="information-we-collect">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold mb-2">Personal Information You Provide</h3>
          <p className="mb-3">We collect the following details when you submit a query or feedback:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number (optional)</li>
            <li>Your message or feedback</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
          <p>
            We may automatically collect non-personal information such as device type, app usage statistics, and error logs to help improve functionality.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8" id="how-we-use-your-information">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-3">We use your personal data to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Respond to your queries or feedback</li>
            <li>Provide customer support</li>
            <li>Improve our app’s features and user experience</li>
            <li>Communicate updates relevant to your feedback</li>
          </ul>
          <p>
            We do <strong>not</strong> use your data for advertising or marketing purposes without your explicit consent.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8" id="data-sharing">
          <h2 className="text-2xl font-semibold mb-4">3. Data Sharing and Disclosure</h2>
          <p>
            We <strong>do not sell or rent</strong> your personal information. Data may be shared with trusted third-party
            service providers who assist in app operations, under strict confidentiality agreements.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8" id="data-security">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We apply reasonable security measures to safeguard your data from unauthorized access or loss.
            However, no digital platform can guarantee absolute security.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8" id="user-rights">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
          <p>
            You can request access to, correction of, or deletion of your personal data by contacting us at{' '}
            <a
              href="mailto:kamaltech2023@gmail.com"
              className="text-blue-600 underline"
              aria-label="Email contact for privacy requests"
            >
              kamaltech2023@gmail.com
            </a>
            . We will respond in accordance with applicable data protection laws.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8" id="data-retention">
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to provide services, comply with legal obligations,
            or resolve disputes.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8" id="childrens-privacy">
          <h2 className="text-2xl font-semibold mb-4">7. Children’s Privacy</h2>
          <p>
            Our app is not intended for children under 13. We do not knowingly collect personal information from anyone under 13 years of age.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8" id="policy-updates">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may revise this Privacy Policy from time to time. Updates will be posted on this page with the effective date.
            Continued use of the app constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-12" id="contact">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>For any privacy-related questions, please reach out to us at:</p>
          <address className="not-italic mt-2">
            <a
              href="mailto:kamaltech2023@gmail.com"
              className="text-blue-600 underline"
              aria-label="Contact email for privacy policy inquiries"
            >
              kamaltech2023@gmail.com
            </a>
            <br />
            Kamal Kumar
          </address>
        </section>

        <p className="text-sm italic">
          By using <strong>Appliance Error Fix</strong> and submitting any personal data, you consent to the practices outlined in this Privacy Policy.
        </p>
      </article>
    </main>
  )
}

export default PrivacyPolicy
