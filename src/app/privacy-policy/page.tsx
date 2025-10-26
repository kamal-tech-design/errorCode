import PrivacyPolicy from './PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy – Appliance Error Fix',
  description:
    'Learn how Appliance Error Fix collects, uses, and protects your personal data. Review our Privacy Policy to understand your rights and our data practices.',
  keywords: [
    'privacy policy',
    'Appliance Error Fix',
    'data protection',
    'personal information',
    'user privacy',
    'data usage',
    'information security',
    'GDPR compliance',
    'app privacy'
  ],
  alternates: {
    canonical: `https://applianceerrorfix.com/privacy-policy`,
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full mx-auto px-1 py-10">
      <PrivacyPolicy />
    </main>
  )
}
