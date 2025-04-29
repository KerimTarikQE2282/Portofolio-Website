// pages/index.jsx (or any other component)
import React from 'react'
import PDFViewer from '@/components/PDFViewer'
import IELTS from '../../Certificates/IELTS.pdf'
export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My PDF Demo</h1>
      <PDFViewer
       fileUrl={IELTS}
        height={800}
      />
    </div>
  )
}
