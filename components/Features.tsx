import React from 'react';
import { Shield, Zap, Smartphone, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get your download links in seconds with our optimized processing engine.'
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Your privacy is protected. We don\'t store any personal data or files.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Works perfectly on all devices - desktop, tablet, and mobile.'
  },
  {
    icon: Globe,
    title: 'No Registration',
    description: 'Start downloading immediately. No sign-up or account required.'
  }
];

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Why Choose Our Downloader?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Experience the fastest and most reliable way to download files from TaraBox and TeraBox
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-blue-100 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}