"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Building,
  ArrowLeft,
  MapPin,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Compass,
  Rocket,
  MessageSquare,
  Lock,
  Users,
  Mail,
  Phone,
  FileText,
  Download,
  Star,
  StarOff,
  Share2,
  TrendingUp,
  Award,
  Clock,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function BusinessDetailPage({ params }: { params: { id: string } }) {
  const [saved, setSaved] = useState(false)

  // Mock data - in a real app, this would be fetched based on the ID
  const business = {
    id: params.id,
    title: "Commercial Equipment Manufacturer",
    location: "Florida",
    ebitda: "$524K",
    sdeMultiple: "3.8x - 4.5x",
    established: "2002",
    highlights: [
      "In-house manufacturing (16,000 sq ft facility) = quality control + margin protection",
      "Nationwide shipping = large addressable market",
      "Established reputation (4.5★ reviews)",
      "Turnkey sale: includes equipment, permits, and trained staff",
      "Strong recurring revenue from maintenance contracts (32% of total)",
    ],
    diligenceAreas: [
      "Client concentration risk? % revenue from top 3 customers",
      "Nature of work: One-off installs vs. recurring contracts",
      "Gross margin by project type",
      "Key-man dependency (CAD/design/production)",
      "Lead times + backlog visibility",
    ],
    sectorNotes: [
      "Customer Lifecycle: Most clients operate on 5–7 year refit cycles — long-term relationships are common if service is good",
      "Margins: Materials (e.g., steel, wood) and labor drive COGS — inflation and supply chain disruptions matter",
      "Key Risks: Labor retention (esp. welders/CAD), permit delays, or design bottlenecks",
      "Upside Signals: National customers, multi-unit accounts (e.g., franchise chains), or contracts with recurring maintenance",
      "Buyer's Angle: Look for opportunities to upsell on design or lock-in long-term service contracts for margin expansion",
    ],
    expansionPotential: [
      "Target foodservice chains, schools, and hospitals",
      "Add sales reps to grow direct pipeline",
      "Offer design-to-install bundles or recurring maintenance",
    ],
    quickTake:
      "A turnkey niche manufacturer with good bones. If margins and client diversification check out, this could be a scalable bolt-on or standalone platform.",
    affiliations: [
      "Education: Same university (University of Florida)",
      "Previous employer: Worked at similar industry",
    ],
    successionClues: [
      "Owner is 67 years old and mentioned retirement to customers",
      "No family members in the business",
      "Recently updated systems and documentation",
      "Hired operations manager in last 6 months",
      "Owner taking more vacation time than previous years",
    ],
    sbaQualification: "Likely qualifies for SBA 7(a) loan with 10% down payment",
    financials: {
      revenue: {
        "2020": "$1.8M",
        "2021": "$2.1M",
        "2022": "$2.4M",
      },
      ebitda: {
        "2020": "$410K",
        "2021": "$465K",
        "2022": "$524K",
      },
      margins: {
        "2020": "22.8%",
        "2021": "22.1%",
        "2022": "21.8%",
      },
    },
    documents: [
      { name: "Financial Summary", type: "PDF", size: "2.4 MB" },
      { name: "Equipment List", type: "XLSX", size: "1.1 MB" },
      { name: "Customer Analysis", type: "PDF", size: "3.2 MB" },
      { name: "Facility Photos", type: "ZIP", size: "8.7 MB" },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Search
              </Button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 py-2">
          <div className="bg-gradient-to-r from-purple-50 to-white p-3 rounded-lg border border-purple-100 flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-medium">Coming Soon: AI Outreach Tools</span>
              <span className="ml-2 text-sm text-gray-600 hidden md:inline">
                Generate bespoke emails, call scripts, letters, and video messages tailored to your affiliations
              </span>
            </div>
            <Link href="/coming-soon">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm border mb-6">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <Badge className="mb-2 bg-purple-600">Deal Lens™</Badge>
                  <h1 className="text-2xl font-bold">{business.title}</h1>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {business.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {business.ebitda} EBITDA
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {business.sdeMultiple} SDE Multiple
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Est. {business.established}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSaved(!saved)}
                    className="flex items-center gap-1"
                  >
                    {saved ? (
                      <>
                        <StarOff className="h-4 w-4" />
                        Unsave
                      </>
                    ) : (
                      <>
                        <Star className="h-4 w-4" />
                        Save
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-purple-600 hover:bg-purple-700">Contact Owner</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Contact Business Owner</DialogTitle>
                        <DialogDescription>Purchase access to contact the business owner directly.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold mb-2">What you'll get:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Owner contact information</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Detailed financial statements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Customer concentration data</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Direct messaging with owner</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-semibold">Premium Access</p>
                            <p className="text-sm text-gray-600">One-time payment</p>
                          </div>
                          <p className="font-bold text-lg">$99</p>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Purchase Access</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview">
              <div className="px-6 border-b">
                <TabsList className="mt-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="connections">Affiliations</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                        Highlights
                      </h3>
                      <ul className="space-y-2">
                        {business.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                        Key Diligence Areas
                      </h3>
                      <ul className="space-y-2">
                        {business.diligenceAreas.map((area, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Rocket className="h-5 w-5 text-purple-600 mr-2" />
                        Expansion Potential
                      </h3>
                      <ul className="space-y-2">
                        {business.expansionPotential.map((potential, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{potential}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        Succession Clues
                      </h3>
                      <ul className="space-y-2">
                        {business.successionClues.map((clue, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold">•</span>
                            <span>{clue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        SBA Qualification
                      </h3>
                      <div className="bg-green-50 p-4 rounded-md">
                        <p>{business.sbaQualification}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Compass className="h-5 w-5 text-blue-600 mr-2" />
                        Sector-Specific Notes
                      </h3>
                      <ul className="space-y-2">
                        {business.sectorNotes.map((note, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <MessageSquare className="h-5 w-5 text-gray-600 mr-2" />
                        Quick Take
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md italic">"{business.quickTake}"</div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-md">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Users className="h-5 w-5 text-purple-600 mr-2" />
                        Your Connections
                      </h3>
                      <ul className="space-y-2">
                        {business.affiliations.map((affiliation, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold">•</span>
                            <span>{affiliation}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mt-3">
                        These connections can help you establish rapport when reaching out to the business owner.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="financials" className="p-6">
                <div className="mb-6 p-4 bg-gray-50 rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Detailed financials are locked</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-purple-600 hover:bg-purple-700">Unlock Financials</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Unlock Financial Details</DialogTitle>
                        <DialogDescription>
                          Get full access to detailed financial information for this business.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold mb-2">What you'll get:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">3 years of detailed P&L statements</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Balance sheet information</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Customer concentration analysis</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Cash flow statements</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-semibold">Premium Access</p>
                            <p className="text-sm text-gray-600">One-time payment</p>
                          </div>
                          <p className="font-bold text-lg">$99</p>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Purchase Access</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <h3 className="font-semibold">Revenue</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2020:</span>
                          <span className="font-medium">{business.financials.revenue["2020"]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2021:</span>
                          <span className="font-medium">{business.financials.revenue["2021"]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2022:</span>
                          <span className="font-medium">{business.financials.revenue["2022"]}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <h3 className="font-semibold">EBITDA</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2020:</span>
                          <span className="font-medium">{business.financials.ebitda["2020"]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2021:</span>
                          <span className="font-medium">{business.financials.ebitda["2021"]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2022:</span>
                          <span className="font-medium">{business.financials.ebitda["2022"]}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <h3 className="font-semibold">Margins</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2020:</span>
                          <span className="font-medium">{business.financials.margins["2020"]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2021:</span>
                          <span className="font-medium">{business.financials.margins["2021"]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">2022:</span>
                          <span className="font-medium">{business.financials.margins["2022"]}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    Note: Full financial details including balance sheets, cash flow statements, and customer
                    concentration data are available after purchase.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="p-6">
                <div className="mb-6 p-4 bg-gray-50 rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Business documents are locked</span>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-purple-600 hover:bg-purple-700">Unlock Documents</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Unlock Business Documents</DialogTitle>
                        <DialogDescription>
                          Get access to all business documents and detailed information.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="border rounded-md p-4">
                          <h4 className="font-semibold mb-2">What you'll get:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Financial statements and summaries</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Equipment and asset lists</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Customer and market analysis</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                              <span className="text-sm">Facility photos and documentation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-semibold">Premium Access</p>
                            <p className="text-sm text-gray-600">One-time payment</p>
                          </div>
                          <p className="font-bold text-lg">$99</p>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">Purchase Access</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="border rounded-md">
                  <div className="p-4 border-b bg-gray-50">
                    <h3 className="font-semibold">Available Documents</h3>
                  </div>
                  <div className="divide-y">
                    {business.documents.map((doc, index) => (
                      <div key={index} className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 mr-3 text-gray-500" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-gray-600">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" disabled className="text-gray-400">
                          <Download className="h-4 w-4 mr-1" />
                          Locked
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="connections" className="p-6">
                <div className="bg-purple-50 p-6 rounded-md mb-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Users className="h-5 w-5 text-purple-600 mr-2" />
                    Your Affiliations with the Business Owner
                  </h3>

                  <div className="space-y-4">
                    {business.affiliations.map((affiliation, index) => (
                      <div key={index} className="bg-white p-4 rounded-md shadow-sm">
                        <h4 className="font-medium mb-1">{affiliation}</h4>
                        <p className="text-sm text-gray-600">
                          This connection can help you establish rapport and build trust when reaching out.
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">How to leverage these connections:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Mention your shared background in your initial outreach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Ask about specific experiences related to your connection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Reference mutual contacts if applicable</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md border">
                  <h3 className="text-lg font-semibold mb-4">Contact the Business Owner</h3>
                  <p className="mb-6">
                    Purchase access to contact the business owner directly and discuss this opportunity.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="border rounded-md p-4 flex flex-col items-center text-center">
                      <Mail className="h-8 w-8 text-gray-400 mb-2" />
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-sm text-gray-500">[Locked]</p>
                    </div>

                    <div className="border rounded-md p-4 flex flex-col items-center text-center">
                      <Phone className="h-8 w-8 text-gray-400 mb-2" />
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-sm text-gray-500">[Locked]</p>
                    </div>

                    <div className="border rounded-md p-4 flex flex-col items-center text-center">
                      <MessageSquare className="h-8 w-8 text-gray-400 mb-2" />
                      <h4 className="font-medium mb-1">Direct Message</h4>
                      <p className="text-sm text-gray-500">[Locked]</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-purple-600 hover:bg-purple-700">Unlock Contact Information</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Unlock Contact Information</DialogTitle>
                          <DialogDescription>
                            Get direct access to the business owner's contact details.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div className="border rounded-md p-4">
                            <h4 className="font-semibold mb-2">What you'll get:</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                                <span className="text-sm">Owner's email address</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                                <span className="text-sm">Direct phone number</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                                <span className="text-sm">In-platform messaging</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                                <span className="text-sm">Personalized introduction templates</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                            <div>
                              <p className="font-semibold">Premium Access</p>
                              <p className="text-sm text-gray-600">One-time payment</p>
                            </div>
                            <p className="font-bold text-lg">$99</p>
                          </div>
                          <Button className="w-full bg-purple-600 hover:bg-purple-700">Purchase Access</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
