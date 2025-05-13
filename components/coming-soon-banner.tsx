import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComingSoonBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-white rounded-lg p-4 mb-6 border border-purple-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
          <div>
            <h3 className="font-semibold">Bespoke AI Outreach Tools Coming Soon</h3>
            <p className="text-sm text-gray-600">
              Create personalized emails, letters, call scripts, and video messages tailored to your affiliations
            </p>
          </div>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700" size="sm">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
