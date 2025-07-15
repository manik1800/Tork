import React, { useState } from 'react';
import { Download, Loader2, CheckCircle, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface FileInfo {
  name: string;
  size: string;
  type: string;
  downloadUrl: string;
  isVideo?: boolean;
  previewUrl?: string;
}

export default function DownloadForm() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [error, setError] = useState('');
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsProcessing(true);
    setError('');
    setFileInfo(null);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (url.includes('tarabox') || url.includes('terabox')) {
      // Simulate successful extraction
      const isVideoFile = Math.random() > 0.5; // Randomly determine if it's a video for demo
      setFileInfo({
        name: isVideoFile ? 'Sample_Video.mp4' : 'Sample_Document.pdf',
        size: isVideoFile ? '45.2 MB' : '2.4 MB',
        type: isVideoFile ? 'MP4 Video' : 'PDF Document',
        downloadUrl: '#',
        isVideo: isVideoFile,
        previewUrl: isVideoFile ? 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' : undefined
      });
    } else {
      setError('Please enter a valid TaraBox/TeraBox link');
    }

    setIsProcessing(false);
  };

  const copyToClipboard = () => {
    if (fileInfo?.downloadUrl) {
      navigator.clipboard.writeText(fileInfo.downloadUrl);
    }
  };

  const handleWatchVideo = () => {
    setShowVideoPlayer(true);
  };

  const handleDownload = () => {
    if (fileInfo?.downloadUrl) {
      window.open(fileInfo.downloadUrl, '_blank');
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Download from TaraBox
            </h2>
            <p className="text-gray-600">
              Paste your TaraBox or TeraBox link below to get direct download access
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                TaraBox/TeraBox URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.terabox.com/s/..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                disabled={isProcessing}
              />
            </div>

            <button
              type="submit"
              disabled={!url.trim() || isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Generate Download Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      )}

      {fileInfo && (
        <div className="space-y-6">
          {showVideoPlayer && fileInfo.isVideo && fileInfo.previewUrl ? (
            <VideoPlayer
              videoUrl={fileInfo.previewUrl}
              fileName={fileInfo.name}
              onDownload={handleDownload}
            />
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    File Ready for Download
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>File Name:</span>
                      <span className="font-medium">{fileInfo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size:</span>
                      <span className="font-medium">{fileInfo.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Type:</span>
                      <span className="font-medium">{fileInfo.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {fileInfo.isVideo && (
                      <button
                        onClick={handleWatchVideo}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>Watch Video</span>
                      </button>
                    )}
                    
                    <button
                      onClick={handleDownload}
                      className={`${fileInfo.isVideo ? 'flex-1' : 'flex-1'} bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2`}
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Now</span>
                    </button>
                    
                    <button
                      onClick={copyToClipboard}
                      className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                      title="Copy download link"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                    
                    <button
                      onClick={() => window.open(fileInfo.downloadUrl, '_blank')}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                      title="Open in new tab"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}