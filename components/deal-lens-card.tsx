"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"

interface Affiliation {
  name: string
  relationship: string
  notes?: string
}

interface Business {
  id: string
  name: string
  industry: string
  location: string
  revenue: string
  employees: number
  description: string
  affiliations?: Affiliation[]
  financials?: {
    revenue: string
    ebitda: string
    askingPrice: string
  }
}

interface DealLensCardProps {
  business: Business
}

export default function DealLensCard({ business }: DealLensCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("overview")

  // Safely handle affiliations
  const safeAffiliations = Array.isArray(business.affiliations) ? business.affiliations : []

  // Handle tab change safely
  const handleTabChange = (value: string) => {
    setSelectedTab(value)
  }

  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{business.name}</h2>
            <p className="text-gray-500">
              {business.industry} • {business.location}
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Unlock Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Unlock Business Details</DialogTitle>
                <DialogDescription>
                  Get full access to contact information, detailed financials, and direct communication with the
                  business owner.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <span className="text-brown-500 mr-2">💼</span>
                    <h3 className="text-xl font-bold">Starter</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    $500<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-4">For: Solo searchers or side-hustle buyers</p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Unlimited search & filtering across all listings</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Save up to 25 businesses to your personalized deal flow</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Export up to 10 businesses/month to CSV</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Weekly curated drop of new opportunities</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Early access to future tools</span>
                    </li>
                  </ul>

                  <Button className="w-full">Get Started</Button>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <div className="flex items-center mb-2">
                    <span className="text-purple-500 mr-2">🚀</span>
                    <h3 className="text-xl font-bold">Pro</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    $1,000<span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-4">For: Active acquirers and small acquisition teams</p>

                  <div className="mb-4">
                    <p className="font-medium">Everything in Starter, plus:</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Save up to 200 businesses</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Export up to 50 businesses/month</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Custom email alerts for high-match businesses</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Tagging, notes, and deal stage tracking</span>
                    </li>
                    <li className="flex">
                      <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span>Beta access to advanced tools</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Upgrade to Pro</Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Need a custom plan for your team?{" "}
                  <a href="#" className="text-purple-600 font-medium">
                    Contact us
                  </a>
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="overview" value={selectedTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="affiliations">Affiliations</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Description</h3>
              <p>{business.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-1">Industry</h3>
                <p>{business.industry}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p>{business.location}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Revenue</h3>
                <p>{business.revenue}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Employees</h3>
                <p>{business.employees}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financials" className="space-y-4">
            {business.financials ? (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Annual Revenue</h3>
                  <p>{business.financials.revenue}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">EBITDA</h3>
                  <p>{business.financials.ebitda}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Asking Price</h3>
                  <p>{business.financials.askingPrice}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Unlock business details to view financial information</p>
                <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                  Unlock Details
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="affiliations">
            {safeAffiliations && safeAffiliations.length > 0 ? (
              <div className="space-y-4">
                {safeAffiliations.map((affiliation, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold">{affiliation.name}</h3>
                    <p className="text-sm text-gray-500">{affiliation.relationship}</p>
                    {affiliation.notes && <p className="mt-2 text-sm">{affiliation.notes}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No affiliations found for this business</p>
                <p className="text-sm text-gray-400 mt-2">Unlock business details to view and add affiliations</p>
                <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                  Unlock Details
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <div className="text-center py-8">
              <p className="text-gray-500">Unlock business details to add and view notes</p>
              <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                Unlock Details
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
