"use client"

import { useState } from "react"
import {
  MapPin,
  DollarSign,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertTriangle,
  Compass,
  Rocket,
  MessageSquare,
  Lock,
  Users,
  TrendingUp,
  Award,
  Clock,
  Building,
  Phone,
  Mail,
  ExternalLink,
  Briefcase,
  User,
  Handshake,
  GraduationCap,
  Globe,
  Home,
  BarChart4,
  Map,
  Landmark,
  Scale,
  Percent,
  TrendingDown,
  Lightbulb,
  Layers,
  Leaf,
  Truck,
  Zap,
  Star,
  StarOff,
  FileText,
  Share2,
  FileSpreadsheet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

interface DealLensCardProps {
  title: string
  location: string
  ebitda: string
  sdeMultiple: string
  established: string
  highlights: string[]
  diligenceAreas: string[]
  sectorNotes: string[]
  expansionPotential: string[]
  quickTake: string
  affiliations: string[]
  successionClues: string[]
  sbaQualification: string
}

export function DealLensCard({
  title,
  location,
  ebitda,
  sdeMultiple,
  established,
  highlights,
  diligenceAreas,
  sectorNotes,
  expansionPotential,
  quickTake,
  affiliations,
  successionClues,
  sbaQualification,
}: DealLensCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [insightsTab, setInsightsTab] = useState("industry")
  const [saved, setSaved] = useState(false)

  // Calculate succession readiness score based on clues
  const successionScore = Math.min(100, successionClues.length * 20)

  // Icons for affiliations
  const affiliationIcons = [
    <GraduationCap className="h-5 w-5 text-purple-600 mt-0.5" key="education" />,
    <Handshake className="h-5 w-5 text-purple-600 mt-0.5" key="business" />,
    <Globe className="h-5 w-5 text-purple-600 mt-0.5" key="location" />,
    <Home className="h-5 w-5 text-purple-600 mt-0.5" key="hometown" />,
  ]

  // Extract state from location
  const state = location || "Florida"

  // Owner information
  const ownerInfo = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    age: "67",
    since: "2002",
    background: "Engineering, 20+ years in manufacturing",
  }

  const handleSave = () => {
    setSaved(!saved)
    toast({
      title: saved ? "Business removed from saved list" : "Business saved successfully",
      description: saved
        ? `${title} has been removed from your saved businesses.`
        : `${title} has been added to your saved businesses.`,
      duration: 3000,
    })
  }

  const handleExportContacts = () => {
    toast({
      title: "Contacts exported",
      description: "Business owner contact information has been exported to your CRM.",
      duration: 3000,
    })
  }

  const handleExportCSV = () => {
    toast({
      title: "Business data exported",
      description: "Business data has been exported as CSV file.",
      duration: 3000,
    })
  }

  const handleExportPDF = () => {
    toast({
      title: "Business report generated",
      description: "A detailed PDF report for this business has been generated and downloaded.",
      duration: 3000,
    })
  }

  return (
    <Card className="overflow-hidden shadow-md border-purple-100 transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-50 to-white p-4 border-b border-purple-100">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-purple-600">Deal Lens™</Badge>
              {successionScore >= 60 && <Badge className="bg-orange-500">High Succession Readiness</Badge>}
              {sbaQualification.includes("qualifies") && <Badge className="bg-green-600">SBA Qualified</Badge>}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {location}
              </div>
              <div className="flex items-center">
                <DollarSign className="h-3.5 w-3.5 mr-1" />
                {ebitda} EBITDA
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-3.5 w-3.5 mr-1" />
                {sdeMultiple} SDE Multiple
              </div>
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                Est. {established}
              </div>
            </div>

            {/* Owner Contact Information */}
            <div className="mt-3 p-2 bg-white rounded-md border border-gray-200 shadow-sm">
              <h4 className="text-sm font-medium mb-1 flex items-center">
                <User className="h-3.5 w-3.5 mr-1 text-purple-600" />
                Owner Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                <div className="flex items-center">
                  <span className="font-medium mr-1">{ownerInfo.name}</span>
                  <span className="text-gray-500">(Owner)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 mr-1 text-gray-500" />
                  <span>{ownerInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-3 w-3 mr-1 text-gray-500" />
                  <span>{ownerInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSave}
              className={`bg-white ${saved ? "border-purple-600 text-purple-600" : ""}`}
            >
              {saved ? (
                <>
                  <StarOff className="h-4 w-4 mr-1" />
                  Saved
                </>
              ) : (
                <>
                  <Star className="h-4 w-4 mr-1" />
                  Save
                </>
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white">
                  <Share2 className="h-4 w-4 mr-1" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleExportContacts}>
                  <Users className="h-4 w-4 mr-2" />
                  Export Contact to CRM
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExportCSV}>
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExportPDF}>
                  <FileText className="h-4 w-4 mr-2" />
                  Export as PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" onClick={() => setExpanded(!expanded)} className="bg-white">
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" />
                  Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" />
                  More
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="overview" className="w-full">
          <div className="sticky top-0 z-10 bg-white border-b">
            <TabsList className="w-full h-auto p-0 bg-gradient-to-r from-gray-50 to-white rounded-none">
              <TabsTrigger
                value="overview"
                className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Overview</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <Lightbulb className="h-4 w-4" />
                  <span>Insights</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="financials"
                className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <BarChart4 className="h-4 w-4" />
                  <span>Financials</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="succession"
                className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Succession</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="affiliations"
                className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Affiliations</span>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="flex-1 py-3 rounded-none data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:shadow-none transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <Layers className="h-4 w-4" />
                  <span>Details</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="p-0">
            <div className="p-4 border-b">
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Highlights</h4>
                  <ul className="mt-1 space-y-1">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm">Key Diligence Areas</h4>
                  <ul className="mt-1 space-y-1">
                    {diligenceAreas.map((area, index) => (
                      <li key={index} className="text-sm">
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {expanded && (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-start gap-2">
                    <Compass className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Sector-Specific Notes</h4>
                      <ul className="mt-1 space-y-1">
                        {sectorNotes.map((note, index) => (
                          <li key={index} className="text-sm">
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b">
                  <div className="flex items-start gap-2">
                    <Rocket className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Expansion Potential</h4>
                      <ul className="mt-1 space-y-1">
                        {expansionPotential.map((potential, index) => (
                          <li key={index} className="text-sm">
                            {potential}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Quick Take</h4>
                      <p className="mt-1 text-sm italic">"{quickTake}"</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="affiliations" className="p-4">
            <div className="space-y-4">
              <div className="bg-purple-50 p-3 rounded-md">
                <h4 className="font-semibold text-sm mb-2 text-purple-800">Why Affiliations Matter</h4>
                <p className="text-sm text-purple-700">
                  Business owners are <span className="font-semibold">3x more likely</span> to respond to outreach when
                  you share meaningful affiliations. Kivo helps you identify and leverage these connections.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Your Affiliations with This Owner</h4>
                <div className="space-y-3">
                  {affiliations.map((affiliation, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-white border border-purple-100 rounded-md shadow-sm"
                    >
                      {affiliationIcons[index % affiliationIcons.length]}
                      <div>
                        <p className="text-sm">{affiliation}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {index === 0
                            ? "Strong affiliation - mention early in outreach"
                            : index === 1
                              ? "Medium strength - good supporting point"
                              : "Helpful connection - can be mentioned in follow-ups"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-purple-100 rounded-md p-3">
                <h4 className="font-semibold text-sm mb-2">How to Use These Affiliations</h4>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <span>Mention your strongest affiliation in your initial outreach subject line</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <span>Elaborate on your shared experiences in the first paragraph</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      Use our AI tools to craft bespoke outreach that naturally incorporates these affiliations
                    </span>
                  </li>
                </ol>
              </div>

              <div className="text-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <span>Use in AI Outreach</span>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financials" className="p-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">Annual Revenue</div>
                  <div className="text-lg font-semibold">$2.4M</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">EBITDA</div>
                  <div className="text-lg font-semibold">{ebitda}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">SDE Multiple Range</div>
                  <div className="text-lg font-semibold">{sdeMultiple}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">Profit Margin</div>
                  <div className="text-lg font-semibold">21.8%</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Revenue Trend (3 Years)</h4>
                <div className="h-24 bg-gray-50 rounded-md p-3 flex items-end justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-12 bg-purple-200 rounded-t-sm" style={{ height: "50px" }}></div>
                    <div className="text-xs mt-1">2020</div>
                    <div className="text-xs text-gray-500">$1.8M</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 bg-purple-300 rounded-t-sm" style={{ height: "70px" }}></div>
                    <div className="text-xs mt-1">2021</div>
                    <div className="text-xs text-gray-500">$2.1M</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 bg-purple-500 rounded-t-sm" style={{ height: "80px" }}></div>
                    <div className="text-xs mt-1">2022</div>
                    <div className="text-xs text-gray-500">$2.4M</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Customer Concentration</h4>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Top 3 Customers</span>
                    <span>42%</span>
                  </div>
                  <Progress value={42} className="h-2" />

                  <div className="flex justify-between text-xs text-gray-500 mb-1 mt-3">
                    <span>Next 7 Customers</span>
                    <span>28%</span>
                  </div>
                  <Progress value={28} className="h-2" />

                  <div className="flex justify-between text-xs text-gray-500 mb-1 mt-3">
                    <span>All Other Customers</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="succession" className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-sm">Succession Readiness</h4>
                  <Badge className={successionScore >= 60 ? "bg-orange-500" : "bg-blue-500"}>
                    {successionScore >= 80
                      ? "Very High"
                      : successionScore >= 60
                        ? "High"
                        : successionScore >= 40
                          ? "Medium"
                          : "Low"}
                  </Badge>
                </div>
                <Progress value={successionScore} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Succession Clues</h4>
                <ul className="space-y-2">
                  {successionClues.map((clue, index) => (
                    <li key={index} className="flex items-start gap-2 bg-orange-50 p-2 rounded-md">
                      <Clock className="h-4 w-4 text-orange-500 mt-0.5" />
                      <span className="text-sm">{clue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">SBA Qualification</h4>
                <div className="bg-green-50 p-3 rounded-md">
                  <div className="flex items-start gap-2">
                    <Award className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">{sbaQualification}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Owner Background</h4>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Owner since {ownerInfo.since}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Age: {ownerInfo.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Background: {ownerInfo.background}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="p-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Business Overview</h4>
                <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm">
                    This established manufacturing business specializes in commercial equipment for the foodservice
                    industry. With a 16,000 sq ft facility and nationwide shipping capabilities, the company has built a
                    strong reputation for quality and reliability over its 20+ year history.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Key Assets</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
                    <Building className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">16,000 sq ft Manufacturing Facility</span>
                      <p className="text-xs text-gray-500">Owned property with modern equipment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
                    <Briefcase className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">Skilled Workforce</span>
                      <p className="text-xs text-gray-500">12 full-time employees including 5 skilled fabricators</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2 bg-gray-50 p-2 rounded-md">
                    <ExternalLink className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium">Customer Relationships</span>
                      <p className="text-xs text-gray-500">Long-standing relationships with major restaurant chains</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Location</h4>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">123 Manufacturing Way, Tampa, FL 33602</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="p-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-white p-3 rounded-md border border-purple-100">
                <h4 className="font-semibold text-sm mb-2 flex items-center">
                  <Lightbulb className="h-4 w-4 text-purple-600 mr-1" />
                  Location & Industry Insights
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Unique insights specific to {title} in {location}
                </p>

                <div className="flex space-x-1 mb-4 border-b">
                  <button
                    onClick={() => setInsightsTab("industry")}
                    className={`px-3 py-1 text-sm rounded-t-md ${insightsTab === "industry" ? "bg-purple-100 text-purple-800 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Industry
                  </button>
                  <button
                    onClick={() => setInsightsTab("location")}
                    className={`px-3 py-1 text-sm rounded-t-md ${insightsTab === "location" ? "bg-purple-100 text-purple-800 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Location
                  </button>
                  <button
                    onClick={() => setInsightsTab("tax")}
                    className={`px-3 py-1 text-sm rounded-t-md ${insightsTab === "tax" ? "bg-purple-100 text-purple-800 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Tax
                  </button>
                  <button
                    onClick={() => setInsightsTab("trends")}
                    className={`px-3 py-1 text-sm rounded-t-md ${insightsTab === "trends" ? "bg-purple-100 text-purple-800 font-medium" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Trends
                  </button>
                </div>

                {insightsTab === "industry" && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Manufacturing Equipment Industry Insights</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-sm">
                        <Zap className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Supply chain disruptions have increased equipment lead times by 35% since 2021</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Zap className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Foodservice equipment market projected to grow 4.2% annually through 2027</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Zap className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Energy-efficient equipment demand up 28% as restaurants seek cost savings</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Zap className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Skilled labor shortage affecting 76% of manufacturing businesses in this sector</span>
                      </li>
                    </ul>
                  </div>
                )}

                {insightsTab === "location" && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Florida Location Insights</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-sm">
                        <Map className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Florida manufacturing businesses benefit from no state income tax and lower operating costs
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Map className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Strategic location provides easy access to Latin American and Caribbean markets</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Map className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Florida offers manufacturing equipment sales tax exemptions (save up to 6%)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Map className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Tampa area has 14% lower industrial real estate costs compared to national average</span>
                      </li>
                    </ul>
                  </div>
                )}

                {insightsTab === "tax" && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Tax Implications</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-sm">
                        <Scale className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>
                          Section 179 deduction allows immediate expensing of up to $1.16M in equipment purchases
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Scale className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Florida offers manufacturing business property tax exemptions (save ~$25K annually)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Scale className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Asset purchase structure could provide ~$120K in tax benefits vs. stock purchase</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Scale className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>R&D tax credits available for equipment design improvements (up to 14% of expenses)</span>
                      </li>
                    </ul>
                  </div>
                )}

                {insightsTab === "trends" && (
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Market Trends</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Ghost kitchens driving 22% increase in compact, modular equipment demand</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Leaf className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Sustainable manufacturing practices becoming key differentiator for buyers</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Truck className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Food truck industry growth creating new market segment (18% CAGR)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <TrendingDown className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>Labor-saving automation features commanding 15-20% price premiums</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white p-3 rounded-md border shadow-sm">
                <h4 className="font-semibold text-sm mb-2 flex items-center">
                  <Percent className="h-4 w-4 text-green-600 mr-1" />
                  Acquisition Opportunity Score
                </h4>
                <div className="flex items-center gap-3">
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: "82%" }}></div>
                  </div>
                  <span className="font-bold text-green-600">82%</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  This business scores in the top 18% of acquisition opportunities in the manufacturing sector in
                  Florida.
                </p>
              </div>

              <div className="bg-white p-3 rounded-md border shadow-sm">
                <h4 className="font-semibold text-sm mb-3">Key Competitive Advantages</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center gap-1 text-sm font-medium text-purple-800">
                      <Landmark className="h-3.5 w-3.5" />
                      <span>Tax Benefits</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Florida's favorable tax environment saves ~$45K/year vs. other states
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center gap-1 text-sm font-medium text-purple-800">
                      <Users className="h-3.5 w-3.5" />
                      <span>Skilled Workforce</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Established team with 15+ years average experience</p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center gap-1 text-sm font-medium text-purple-800">
                      <Globe className="h-3.5 w-3.5" />
                      <span>Market Access</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Strategic location for domestic and international shipping
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center gap-1 text-sm font-medium text-purple-800">
                      <Building className="h-3.5 w-3.5" />
                      <span>Real Estate</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Owned facility with 20% below-market occupancy costs</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-4 bg-gray-50 flex justify-between items-center border-t">
          <div className="flex items-center text-sm text-gray-600">
            <Lock className="h-4 w-4 mr-1" />
            Full details locked
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700">Unlock Details</Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Unlock Business Details</DialogTitle>
                <DialogDescription>
                  Get full access to contact information, detailed financials, and direct communication with the
                  business owner.
                </DialogDescription>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">💼 Starter</h3>
                      <span className="font-bold text-lg">
                        $500<span className="text-sm font-normal text-gray-600">/month</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">For: Solo searchers or side-hustle buyers</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">Unlimited search & filtering across all listings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">Save up to 25 businesses to your personalized deal flow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">Export up to 10 businesses/month to CSV</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">Weekly curated drop of new opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span className="text-sm">Early access to future tools</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Get Started</Button>
                  </div>

                  <div className="border rounded-md p-4 border-purple-200 bg-purple-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">🚀 Pro</h3>
                      <span className="font-bold text-lg">
                        $1,000<span className="text-sm font-normal text-gray-600">/month</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">For: Active acquirers and small acquisition teams</p>
                    <p className="text-sm font-medium mb-2">Everything in Starter, plus:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span className="text-sm">Save up to 200 businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span className="text-sm">Export up to 50 businesses/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span className="text-sm">Custom email alerts for high-match businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span className="text-sm">Tagging, notes, and deal stage tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                        <span className="text-sm">Beta access to advanced tools</span>
                      </li>
                    </ul>
                    <Button className="w-full mt-4 bg-purple-800 hover:bg-purple-900">Upgrade to Pro</Button>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 mt-2">
                  Need a custom plan for your team?{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    Contact us
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
