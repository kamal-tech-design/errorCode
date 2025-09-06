interface ErrorResolutions {
    resolutionid: number;
    errorId: number;
    brandId: number;
    title: string;
    description: string;
    contentOrder: number;
    other: string;
  }

interface ErrorDetail {
  errorId: number;
  brandId: number;
  modalId: number;
  featureId: number;
  applianceId: number;
  erCode: string;
  otherTerm: string;
  slug: string;
  title: string;
  description: string;
  inverterType: string;
  errorType: string;
  errorResolutions: ErrorResolutions[];
}

interface Props {
  errorDetails: ErrorDetail[];
}

export default function ErrorDetailComponent({ errorDetails }: any) {

  if (!errorDetails || errorDetails.length === 0) {
    return <p className="text-gray-500">No error details available.</p>
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 text-left font-semibold text-sm text-gray-700 border-b border-gray-300">
        <div>Title</div>
        <div>Description</div>
        <div>Inverter</div>
        <div>Type</div>
      </div>

      {errorDetails.map((symptom: any) => (
        <div
          key={symptom.errorId}
          className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 text-sm"
        >
          <div>{symptom?.title}</div>
          <div>{symptom.description}</div>
          <div>{symptom.inverterType}</div>
          <div>{symptom.errorType}</div>
        </div>
      ))}
    </div>
  )
}
