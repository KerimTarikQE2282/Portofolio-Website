// components/PDFViewer.jsx
'use client'
import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function PDFViewer({ fileUrl, height = 600 }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 4, overflow: 'hidden' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{ height }}>
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </div>
  )
}
