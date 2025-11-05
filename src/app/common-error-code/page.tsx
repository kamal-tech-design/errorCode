import CommonErrorCodes from './ErrorCode'

export const metadata = {
  title: 'Common Appliance Error Code List – Identify & Fix Your Appliance Issues',
  description: 'Explore our complete guide to the most common washer, dryer, refrigerator, and dishwasher error codes. Learn what each code means and how to fix it easily.',
  alternates: {
    canonical: 'https://applianceerrorfix.com/common-error-code',
  }
}

export default function ErrorCodePage({ errorId }: { errorId?: string }) {
  return (
    <main className="max-w-5xl mx-auto px-4 py-2">
      <CommonErrorCodes errorId={errorId} />
    </main>
  )
}
