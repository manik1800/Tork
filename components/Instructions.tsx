import React from 'react';
import { Copy, Download, Link } from 'lucide-react';

const steps = [
  {
    icon: Copy,
    title: 'Copy Link',
    description: 'Copy the TaraBox or TeraBox sharing link from your browser or app.'
  },
  {
    icon: Link,
    title: 'Paste URL',
    description: 'Paste the link into our input field and click the generate button.'
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Get your direct download link and start downloading immediately.'
  }
];

export default function Instructions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-blue-100">
            Follow these simple steps to download your files
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <div className="bg-blue-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-blue-100 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}