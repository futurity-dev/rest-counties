import { Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
            <span className="text-lg sm:text-xl font-bold">REST Countries API</span>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2024 REST Countries API. Free to use for everyone.</p>
        </div>
      </div>
    </footer>
  )
}
