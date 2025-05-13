"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Building, Search, ArrowRight, Filter, DollarSign, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SearchCriteriaPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [ebitdaRange, setEbitdaRange] = useState([300, 1500])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">Skip to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-3">Find Your Perfect Business</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tell us what you're looking for and we'll match you with off-market businesses that fit your criteria.
              </p>
            </div>

            <Card className="mb-8 shadow-md border-purple-100">
              <CardHeader className="bg-purple-50 border-b border-purple-100">
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-600" />
                  Search Criteria
                </CardTitle>
                <CardDescription>
                  Describe what you're looking for in natural language or use the filters below
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSearch}>
                  <div className="relative mb-8">
                    <Input
                      type="text"
                      placeholder="e.g., 'Manufacturing business in Florida with strong succession indicators and $500K+ EBITDA'"
                      className="pl-10 pr-4 py-6 text-lg shadow-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>

                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="filters">
                      <AccordionTrigger className="text-purple-600 font-medium">
                        <div className="flex items-center gap-2">
                          <Filter className="h-4 w-4" />
                          Advanced Filters
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                          <div className="space-y-6">
                            <div>
                              <Label className="text-sm font-medium mb-2 block">Industry</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="All Industries" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                  <SelectItem value="services">Professional Services</SelectItem>
                                  <SelectItem value="retail">Retail</SelectItem>
                                  <SelectItem value="construction">Construction</SelectItem>
                                  <SelectItem value="technology">Technology</SelectItem>
                                  <SelectItem value="healthcare">Healthcare</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label className="text-sm font-medium mb-2 block">Location</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="All Locations" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="northeast">Northeast</SelectItem>
                                  <SelectItem value="southeast">Southeast</SelectItem>
                                  <SelectItem value="midwest">Midwest</SelectItem>
                                  <SelectItem value="southwest">Southwest</SelectItem>
                                  <SelectItem value="west">West Coast</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label className="text-sm font-medium mb-2 block">EBITDA Range ($K)</Label>
                              <div className="pt-6 px-2">
                                <Slider
                                  defaultValue={[300, 1500]}
                                  max={3000}
                                  step={50}
                                  value={ebitdaRange}
                                  onValueChange={setEbitdaRange}
                                />
                                <div className="flex justify-between mt-2 text-sm text-gray-500">
                                  <span>${ebitdaRange[0]}K</span>
                                  <span>${ebitdaRange[1]}K</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <Label className="text-sm font-medium mb-2 block">Succession Readiness</Label>
                              <div className="space-y-2 pt-2">
                                <div className="flex items-center gap-2">
                                  <Checkbox id="succession-high" />
                                  <Label htmlFor="succession-high" className="text-sm font-normal">
                                    High (Owner actively seeking exit)
                                  </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="succession-medium" />
                                  <Label htmlFor="succession-medium" className="text-sm font-normal">
                                    Medium (Shows signs of transition readiness)
                                  </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="succession-any" defaultChecked />
                                  <Label htmlFor="succession-any" className="text-sm font-normal">
                                    Any
                                  </Label>
                                </div>
                              </div>
                            </div>

                            <div>
                              <Label className="text-sm font-medium mb-2 block">SBA Qualification</Label>
                              <div className="space-y-2 pt-2">
                                <div className="flex items-center gap-2">
                                  <Checkbox id="sba-qualified" />
                                  <Label htmlFor="sba-qualified" className="text-sm font-normal">
                                    SBA Qualified Only
                                  </Label>
                                </div>
                              </div>
                            </div>

                            <div>
                              <Label className="text-sm font-medium mb-2 block">Connection Strength</Label>
                              <div className="space-y-2 pt-2">
                                <div className="flex items-center gap-2">
                                  <Checkbox id="connection-strong" />
                                  <Label htmlFor="connection-strong" className="text-sm font-normal">
                                    Strong Connections Only
                                  </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="connection-any" defaultChecked />
                                  <Label htmlFor="connection-any" className="text-sm font-normal">
                                    Any
                                  </Label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex justify-center">
                    <Button type="submit" size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                      Find Businesses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Financial Fit</h3>
                    <p className="text-sm text-gray-600">
                      We'll match you with businesses that align with your financial criteria and SBA qualification.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Succession Readiness</h3>
                    <p className="text-sm text-gray-600">
                      Find businesses where owners are showing signs of readiness to transition.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Personal Connections</h3>
                    <p className="text-sm text-gray-600">
                      Discover businesses where you have meaningful connections with the owner.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
