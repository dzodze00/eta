import { Building } from "lucide-react"
import Link from "next/link"

export default function PricingLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse mx-auto mb-4"></div>
            <div className="h-4 w-full max-w-2xl bg-gray-200 rounded-md animate-pulse mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Skeleton for Starter Plan */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="p-6 border-b">
                <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse mb-2"></div>
                <div className="h-4 w-48 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="h-5 w-5 bg-gray-200 rounded-md animate-pulse mt-0.5"></div>
                      <div className="h-5 w-full bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mt-8"></div>
              </div>
            </div>

            {/* Skeleton for Pro Plan */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="p-6 border-b">
                <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse mb-2"></div>
                <div className="h-4 w-48 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
              <div className="p-6">
                <div className="h-5 w-40 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="h-5 w-5 bg-gray-200 rounded-md animate-pulse mt-0.5"></div>
                      <div className="h-5 w-full bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
