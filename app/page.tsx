import Link from "next/link"
import { ArrowRight, Building, CheckCircle, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Log in
            </Link>
            <Link href="/onboarding">
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Democratizing <span className="text-purple-600">Entrepreneurship</span> Through Acquisition
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover off-market businesses with personal connections to owners, succession clues, and SBA
                qualification insights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Connections</h3>
                <p className="text-gray-600">
                  Our proprietary algorithm uncovers meaningful affiliations between you and business owners, increasing
                  response rates by 3x.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Succession Insights</h3>
                <p className="text-gray-600">
                  Identify owners showing signs of readiness to transition based on proprietary succession clues and
                  timing indicators.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Deal Lens™ Analysis</h3>
                <p className="text-gray-600">
                  Get proprietary insights on SBA qualification, valuation guidance, and expansion potential for each
                  business.
                </p>
              </div>
            </div>

            <div className="bg-purple-600 text-white p-8 md:p-12 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to find your perfect business?</h2>
                  <p className="text-purple-100 text-lg">
                    Join Kivo today and discover off-market businesses with our personalized insights and connections.
                  </p>
                </div>
                <Link href="/onboarding">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 min-w-[200px]">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building className="h-6 w-6 text-purple-400" />
              <span className="font-bold text-xl">Kivo</span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} Kivo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
