export interface ErrorCodeComponentProps {
  errorId: number;
  erCode?: string;
  title: string;
  description: string;
  inverterType: string;
  errorType: string;
  errorKind: 'code' | 'symptom';
}
