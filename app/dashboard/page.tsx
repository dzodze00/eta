"use client"

import type React from "react"

import { useState } from "react"
import {
  Building,
  Search,
  Bell,
  User,
  LogOut,
  ChevronDown,
  Filter,
  Star,
  Briefcase,
  Zap,
  Phone,
  Mail,
  FileText,
  Video,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { DealLensCard } from "@/components/deal-lens-card"
import Link from "next/link"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </div>

          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for businesses (e.g., 'manufacturing business in Florida with strong succession indicators')"
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/pricing">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Pricing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/saved-businesses" className="flex items-center w-full">
                    <Star className="mr-2 h-4 w-4" />
                    Saved Businesses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-3">
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

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="search">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="search">Search Results</TabsTrigger>
                <TabsTrigger value="saved">
                  <Link href="/saved-businesses" className="flex items-center">
                    Saved Businesses
                  </Link>
                </TabsTrigger>
                <TabsTrigger value="coming-soon">Coming Soon</TabsTrigger>
              </TabsList>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>

            <TabsContent value="search" className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h2 className="font-semibold text-lg mb-2">Search Results</h2>
                <p className="text-gray-600">
                  Showing results for: <span className="font-medium">{searchQuery || "All businesses"}</span>
                </p>
              </div>

              <div className="grid gap-6">
                <DealLensCard
                  title="Commercial Equipment Manufacturer"
                  location="Florida"
                  ebitda="$524K"
                  sdeMultiple="3.8x - 4.5x"
                  established="2002"
                  highlights={[
                    "In-house manufacturing (16,000 sq ft facility) = quality control + margin protection",
                    "Nationwide shipping = large addressable market",
                    "Established reputation (4.5★ reviews)",
                    "Turnkey sale: includes equipment, permits, and trained staff",
                    "Strong recurring revenue from maintenance contracts (32% of total)",
                  ]}
                  diligenceAreas={[
                    "Client concentration risk? % revenue from top 3 customers",
                    "Nature of work: One-off installs vs. recurring contracts",
                    "Gross margin by project type",
                    "Key-man dependency (CAD/design/production)",
                    "Lead times + backlog visibility",
                  ]}
                  sectorNotes={[
                    "Customer Lifecycle: Most clients operate on 5–7 year refit cycles — long-term relationships are common if service is good",
                    "Margins: Materials (e.g., steel, wood) and labor drive COGS — inflation and supply chain disruptions matter",
                    "Key Risks: Labor retention (esp. welders/CAD), permit delays, or design bottlenecks",
                    "Upside Signals: National customers, multi-unit accounts (e.g., franchise chains), or contracts with recurring maintenance",
                    "Buyer's Angle: Look for opportunities to upsell on design or lock-in long-term service contracts for margin expansion",
                  ]}
                  expansionPotential={[
                    "Target foodservice chains, schools, and hospitals",
                    "Add sales reps to grow direct pipeline",
                    "Offer design-to-install bundles or recurring maintenance",
                  ]}
                  quickTake="A turnkey niche manufacturer with good bones. If margins and client diversification check out, this could be a scalable bolt-on or standalone platform."
                  affiliations={[
                    "Education: Same university (University of Florida)",
                    "Previous employer: Worked at similar industry",
                  ]}
                  successionClues={[
                    "Owner is 67 years old and mentioned retirement to customers",
                    "No family members in the business",
                    "Recently updated systems and documentation",
                  ]}
                  sbaQualification="Likely qualifies for SBA 7(a) loan with 10% down payment"
                />

                <DealLensCard
                  title="Healthcare Software Provider"
                  location="California"
                  ebitda="$780K"
                  sdeMultiple="4.2x - 5.0x"
                  established="2010"
                  highlights={[
                    "SaaS model with 92% recurring revenue",
                    "Specialized in healthcare compliance solutions",
                    "Low churn rate (4% annually)",
                    "Diverse client base across 18 states",
                    "Remote-first team of 12 employees",
                  ]}
                  diligenceAreas={[
                    "Customer acquisition cost vs. lifetime value",
                    "Technology stack modernization needs",
                    "Competitive landscape and moat",
                    "Regulatory compliance requirements",
                    "Team retention strategy",
                  ]}
                  sectorNotes={[
                    "Healthcare SaaS typically sees longer sales cycles but higher retention",
                    "Regulatory changes can drive growth opportunities",
                    "Integration capabilities with EHR systems is critical",
                    "Security and compliance certifications add significant value",
                    "Consolidation trend in healthcare tech creates exit opportunities",
                  ]}
                  expansionPotential={[
                    "Geographic expansion to East Coast markets",
                    "Add complementary modules for existing customers",
                    "Partner with healthcare consultancies for referrals",
                    "Develop API ecosystem for third-party integrations",
                  ]}
                  quickTake="High-margin SaaS business with stable recurring revenue in a growing sector. Strong foundation for expansion with the right product leadership."
                  affiliations={[
                    "Connection: 2nd degree LinkedIn connection through former colleague",
                    "Industry: Your healthcare consulting experience aligns with their market",
                  ]}
                  successionClues={[
                    "Founder pursuing new venture in different industry",
                    "Management team already handles day-to-day operations",
                    "Recent focus on documenting processes and playbooks",
                  ]}
                  sbaQualification="May qualify for SBA 7(a) loan, but valuation could exceed SBA limits"
                />

                <DealLensCard
                  title="Industrial Services Company"
                  location="Texas"
                  ebitda="$420K"
                  sdeMultiple="3.2x - 3.8x"
                  established="1995"
                  highlights={[
                    "Essential services for oil & gas industry",
                    "Long-term contracts with major energy companies",
                    "Specialized equipment fleet (fully depreciated)",
                    "Experienced field team with low turnover",
                    "Owner retiring, willing to stay for transition",
                  ]}
                  diligenceAreas={[
                    "Revenue concentration among top clients",
                    "Equipment replacement schedule and costs",
                    "Environmental compliance history",
                    "Safety record and insurance claims",
                    "Seasonality and cash flow patterns",
                  ]}
                  sectorNotes={[
                    "Industrial services tend to be recession-resistant but cyclical",
                    "ESG considerations increasingly important for client relationships",
                    "Labor shortages in skilled trades affecting the sector",
                    "Technology adoption lagging, creating efficiency opportunities",
                    "Consolidation trend with strategic buyers paying premium multiples",
                  ]}
                  expansionPotential={[
                    "Expand to renewable energy sector clients",
                    "Add preventative maintenance service contracts",
                    "Geographic expansion to neighboring states",
                    "Implement digital monitoring solutions",
                  ]}
                  quickTake="Stable cash flow generator with long-standing client relationships. Modernization and service expansion could significantly increase valuation."
                  affiliations={[
                    "Regional: You both have Texas connections",
                    "Personal: Owner shares your interest in classic cars (from bio)",
                  ]}
                  successionClues={[
                    "Owner has health concerns and reduced involvement",
                    "Recently hired operations manager to handle daily activities",
                    "Mentioned desire to 'slow down' to key customers",
                  ]}
                  sbaQualification="Strong SBA 7(a) candidate with excellent cash flow coverage ratio"
                />
                <DealLensCard
                  title="Manufacturing Equipment Company"
                  location="Tampa, Florida"
                  ebitda="$520K"
                  sdeMultiple="3.5-4.2x"
                  established="2002"
                  highlights={[
                    "Established manufacturing business with 20+ year history",
                    "Diverse customer base across multiple industries",
                    "Proprietary product line with recurring revenue",
                    "Experienced staff willing to stay on with new ownership",
                  ]}
                  diligenceAreas={[
                    "Customer concentration - top 3 customers represent 42% of revenue",
                    "Equipment upgrades needed in next 2-3 years",
                    "Lease renewal coming up in 18 months",
                  ]}
                  sectorNotes={[
                    "Manufacturing sector in Florida growing at 3.2% annually",
                    "Supply chain diversification creating opportunities",
                    "Increasing demand for US-made equipment",
                  ]}
                  expansionPotential={[
                    "Geographic expansion to Southeast region",
                    "New product line for restaurant industry",
                    "E-commerce sales channel development",
                    "Service contract offering for recurring revenue",
                  ]}
                  quickTake="Solid manufacturing business with strong fundamentals and clear growth paths. Owner retiring after 20+ years. Good systems and team in place."
                  affiliations={[
                    "You both graduated from University of Florida Engineering",
                    "You both are members of the Florida Manufacturers Association",
                    "You both have connections to Tampa Bay Business Journal",
                    "You're both from the Tampa Bay area originally",
                  ]}
                  successionClues={[
                    "Owner mentioned retirement plans in industry publication",
                    "Business listed as 'established 2002' but owner is 67 years old",
                    "Recent leadership additions suggest succession planning",
                    "Company exhibited at fewer trade shows this year",
                  ]}
                  sbaQualification="Business likely qualifies for SBA financing with 10% down payment"
                />
              </div>
            </TabsContent>

            <TabsContent value="saved">
              <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No saved businesses yet</h3>
                <p className="text-gray-600 mb-6">
                  When you find businesses you're interested in, save them here for easy access.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Start Searching</Button>
              </div>
            </TabsContent>

            <TabsContent value="coming-soon">
              <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-purple-600 mr-2" />
                  Coming Soon: AI Outreach Tools
                </h2>
                <p className="text-gray-600 mb-6">
                  Stand out from other buyers with our AI-powered bespoke outreach tools. Generate custom messages that
                  resonate with business owners based on your shared affiliations and their specific business context.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Mail className="h-8 w-8 text-purple-600 mb-2" />
                      <h3 className="font-semibold mb-1">Personalized Emails</h3>
                      <p className="text-sm text-gray-600">
                        Bespoke emails that highlight your unique value proposition and shared affiliations
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Phone className="h-8 w-8 text-purple-600 mb-2" />
                      <h3 className="font-semibold mb-1">Call Scripts</h3>
                      <p className="text-sm text-gray-600">Tailored talking points for effective phone conversations</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <FileText className="h-8 w-8 text-purple-600 mb-2" />
                      <h3 className="font-semibold mb-1">Custom Letters</h3>
                      <p className="text-sm text-gray-600">
                        Bespoke written correspondence that stands out in physical mail
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex flex-col items-center text-center">
                      <Video className="h-8 w-8 text-purple-600 mb-2" />
                      <h3 className="font-semibold mb-1">Video Messages</h3>
                      <p className="text-sm text-gray-600">
                        Personalized script templates for bespoke video introductions
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">Join Waitlist</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
