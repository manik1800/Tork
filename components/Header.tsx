import React from 'react';
import { Download, Cloud } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">TaraBox Downloader</h1>
              <p className="text-blue-100 text-sm">Fast & Free Cloud Downloads</p>
            </div>
          </div>
          <Download className="h-6 w-6 text-white/80" />
        </div>
      </div>
    </header>
  );
}