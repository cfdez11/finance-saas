import { Upload } from "lucide-react"
import { useCSVReader } from "react-papaparse"

import { Button } from "@/components/ui/button"

interface UploadButtonProps {
  onUpload: (results: any) => void
}

export const UploadButton = ({ onUpload }: UploadButtonProps) => {
  const { CSVReader } = useCSVReader()

  // TODO: Add a paywall
  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button
          size="sm"
          className="w-full lg:w-auto"
          {...getRootProps()}
        >
          <Upload className="mr-2 size-4" />
          Import
        </Button>
      )}
    </CSVReader>
  )
}