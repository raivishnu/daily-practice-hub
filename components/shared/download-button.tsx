'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DownloadButtonProps {
  pdfUrl: string
  title: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

export default function DownloadButton({
  pdfUrl,
  title,
  variant = 'default',
  size = 'default'
}: DownloadButtonProps) {
  const handleDownload = () => {
    // Open PDF in new tab
    window.open(pdfUrl, '_blank')
  }

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      size={size}
      className="gap-2"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </Button>
  )
}
