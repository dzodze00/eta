"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Building,
  Search,
  Bell,
  User,
  LogOut,
  ChevronDown,
  Filter,
  Star,
  Download,
  FileSpreadsheet,
  FileText,
  Trash2,
  Info,
  CheckSquare,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"

export default function SavedBusinessesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>([])

  // Mock saved businesses data
  const savedBusinesses = [
    {
      id: "1",
      title: "Commercial Equipment Manufacturer",
      location: "Florida",
      ebitda: "$524K",
      sdeMultiple: "3.8x - 4.5x",
      established: "2002",
      notes: "Great potential for expansion into new markets. Owner is motivated to sell.",
      dateAdded: "2023-11-15",
    },
    {
      id: "2",
      title: "Healthcare Software Provider",
      location: "California",
      ebitda: "$780K",
      sdeMultiple: "4.2x - 5.0x",
      established: "2010",
      notes: "Strong recurring revenue model. Need to check customer concentration.",
      dateAdded: "2023-11-10",
    },
    {
      id: "3",
      title: "Industrial Services Company",
      location: "Texas",
      ebitda: "$420K",
      sdeMultiple: "3.2x - 3.8x",
      established: "1995",
      notes: "Good cash flow, but equipment may need updating soon.",
      dateAdded: "2023-11-05",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
  }

  const handleExportSelected = (format: "csv" | "pdf") => {
    if (selectedBusinesses.length === 0) {
      toast({
        title: "No businesses selected",
        description: "Please select at least one business to export.",
        duration: 3000,
      })
      return
    }

    const selectedCount = selectedBusinesses.length
    const businessText = selectedCount === 1 ? "business" : "businesses"

    toast({
      title: `${selectedCount} ${businessText} exported`,
      description: `Your selected ${businessText} ${selectedCount === 1 ? "has" : "have"} been exported as a ${format.toUpperCase()} file.`,
      duration: 3000,
    })
  }

  const handleRemove = (id: string, title: string) => {
    // Remove from selected if it was selected
    if (selectedBusinesses.includes(id)) {
      setSelectedBusinesses(selectedBusinesses.filter((businessId) => businessId !== id))
    }

    toast({
      title: "Business removed",
      description: `${title} has been removed from your saved businesses.`,
      duration: 3000,
    })
  }

  const toggleSelectBusiness = (id: string) => {
    setSelectedBusinesses((prev) =>
      prev.includes(id) ? prev.filter((businessId) => businessId !== id) : [...prev, id],
    )
  }

  const selectAllBusinesses = () => {
    setSelectedBusinesses(savedBusinesses.map((business) => business.id))
  }

  const deselectAllBusinesses = () => {
    setSelectedBusinesses([])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </Link>

          <div className="flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search saved businesses..."
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
                <DropdownMenuItem>
                  <Star className="mr-2 h-4 w-4" />
                  Saved Businesses
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

      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Saved Businesses</h1>
              <p className="text-gray-600">Manage and track businesses you're interested in</p>
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Export {selectedBusinesses.length > 0 && `(${selectedBusinesses.length})`}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleExportSelected("csv")}>
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    Export as CSV
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleExportSelected("pdf")}>
                    <FileText className="mr-2 h-4 w-4" />
                    Export as PDF
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          {/* Selection controls */}
          {savedBusinesses.length > 0 && (
            <div className="bg-white p-3 rounded-lg shadow-sm border mb-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={selectAllBusinesses}
                  className="text-purple-600 hover:text-purple-700"
                >
                  <CheckSquare className="h-4 w-4 mr-1" />
                  Select All
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={deselectAllBusinesses}
                  className="text-gray-600 hover:text-gray-700"
                  disabled={selectedBusinesses.length === 0}
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Selection
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                {selectedBusinesses.length} of {savedBusinesses.length} selected
              </div>
            </div>
          )}

          {savedBusinesses.length > 0 ? (
            <div className="grid gap-4">
              {savedBusinesses.map((business) => (
                <Card
                  key={business.id}
                  className={`overflow-hidden shadow-sm border-purple-100 ${
                    selectedBusinesses.includes(business.id) ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white p-4 border-b border-purple-100">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <Checkbox
                            id={`select-${business.id}`}
                            checked={selectedBusinesses.includes(business.id)}
                            onCheckedChange={() => toggleSelectBusiness(business.id)}
                            className="h-5 w-5 border-gray-300"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-purple-600">Saved</Badge>
                            <span className="text-xs text-gray-500">
                              Added on {new Date(business.dateAdded).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold">{business.title}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Building className="h-3.5 w-3.5 mr-1" />
                              {business.location}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3.5 w-3.5 mr-1 text-yellow-500" />
                              {business.ebitda} EBITDA
                            </div>
                            <div className="flex items-center">
                              <Info className="h-3.5 w-3.5 mr-1" />
                              Est. {business.established}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/business/${business.id}`}>
                          <Button variant="outline" size="sm" className="bg-white">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleRemove(business.id, business.title)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Your Notes</h4>
                      <p className="text-sm text-gray-700">{business.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
              <Star className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No saved businesses yet</h3>
              <p className="text-gray-600 mb-6">
                When you find businesses you're interested in, save them here for easy access.
              </p>
              <Link href="/dashboard">
                <Button className="bg-purple-600 hover:bg-purple-700">Start Searching</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
