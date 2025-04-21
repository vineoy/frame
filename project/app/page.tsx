import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, Layers, MousePointer, Palette } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Layers className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold">FrameBuilder</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Templates</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Help</Button>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Beautiful Websites <span className="text-blue-600">Without Code</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Drag, drop, and customize pre-built templates to create stunning websites in minutes.
              No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/builder">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Start Building
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Templates
              </Button>
            </div>
            <div className="flex gap-8 pt-6">
              <div className="flex items-center gap-2">
                <MousePointer className="h-5 w-5 text-blue-600" />
                <span>Drag & Drop</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-blue-600" />
                <span>5+ Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Save Time</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <img 
                src="https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg" 
                alt="Builder Interface Preview" 
                className="w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg">
                <Layers className="h-8 w-8" />
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="h-2 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-12">Features that make website building effortless</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <MousePointer className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Intuitive Drag & Drop</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simply drag elements onto your canvas and position them exactly where you want.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4">
                <Palette className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from our collection of professionally designed templates to jumpstart your website.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center p-4 bg-teal-100 dark:bg-teal-900 rounded-lg mb-4">
                <Layers className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Customization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fine-tune every aspect of your website with our powerful customization tools.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 mt-24 py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">FrameBuilder</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 FrameBuilder. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}