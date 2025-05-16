import Link from "next/link"
import { Building, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the plan that best fits your acquisition journey. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold mb-2">💼 Starter</h2>
                <p className="text-gray-600 mb-4">For solo searchers or side-hustle buyers</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$500</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">🔎 Unlimited search & filtering</span> across all listings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">📁 Save up to 25 businesses</span> to your personalized deal flow
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">📤 Export up to 10 businesses/month</span> to CSV (for sharing or
                      analysis)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">🗓 Weekly curated drop</span> of new opportunities based on your
                      filters
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">✉️ Early access</span> to future tools (messaging, valuations, etc.)
                    </span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b">
                <h2 className="text-xl font-bold mb-2">🚀 Pro</h2>
                <p className="text-gray-600 mb-4">For active acquirers and small acquisition teams</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$1,000</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-medium mb-4">Everything in Starter, plus:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">📁 Save up to 200 businesses</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">📤 Export up to 50 businesses/month</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">🔔 Custom email alerts</span> for high-match businesses
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">🏷️ Tagging, notes, and deal stage tracking</span> (basic CRM-style)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-medium">🧪 Beta access to advanced tools</span> (valuation models, seller
                      request flows, financing partners)
                    </span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-purple-600 hover:bg-purple-700">Upgrade to Pro</Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Need a custom plan?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For search funds, PE firms, or acquisition entrepreneurs with specific needs, we offer custom plans.
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
