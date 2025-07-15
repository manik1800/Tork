import React from 'react';
import Header from './components/Header';
import DownloadForm from './components/DownloadForm';
import Features from './components/Features';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TaraBox File Downloader
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Download files from TaraBox and TeraBox instantly. Fast, free, and no registration required.
            </p>
          </div>
          <DownloadForm />
        </section>

        <Features />
        <Instructions />
      </main>

      <Footer />
    </div>
  );
}

export default App;