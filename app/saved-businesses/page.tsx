"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function SavedBusinesses() {
  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>([])

  // Sample saved businesses data
  const savedBusinesses = [
    {
      id: "1",
      name: "Acme Corp",
      industry: "Technology",
      location: "San Francisco, CA",
      revenue: "$5M - $10M",
      addedDate: "2023-05-10",
    },
    {
      id: "2",
      name: "Globex Inc",
      industry: "Manufacturing",
      location: "Chicago, IL",
      revenue: "$2M - $5M",
      addedDate: "2023-05-15",
    },
    {
      id: "3",
      name: "Initech",
      industry: "Software",
      location: "Austin, TX",
      revenue: "$1M - $2M",
      addedDate: "2023-05-20",
    },
  ]

  const toggleSelectBusiness = (id: string) => {
    setSelectedBusinesses((prev) =>
      prev.includes(id) ? prev.filter((businessId) => businessId !== id) : [...prev, id],
    )
  }

  const selectAll = () => {
    if (selectedBusinesses.length === savedBusinesses.length) {
      setSelectedBusinesses([])
    } else {
      setSelectedBusinesses(savedBusinesses.map((business) => business.id))
    }
  }

  const exportSelected = () => {
    // In a real app, this would trigger an export process
    alert(`Exporting ${selectedBusinesses.length} businesses`)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="font-bold text-xl">Kivo</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold">Saved Businesses</h1>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={selectAll}>
            {selectedBusinesses.length === savedBusinesses.length ? "Deselect All" : "Select All"}
          </Button>

          <Button onClick={exportSelected} disabled={selectedBusinesses.length === 0}>
            Export Selected ({selectedBusinesses.length})
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {savedBusinesses.map((business) => (
          <Card key={business.id} className="w-full">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox
                  id={`select-${business.id}`}
                  checked={selectedBusinesses.includes(business.id)}
                  onCheckedChange={() => toggleSelectBusiness(business.id)}
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <Link href={`/business/${business.id}`}>
                      <h2 className="text-xl font-semibold hover:text-blue-600">{business.name}</h2>
                    </Link>
                    <span className="text-sm text-gray-500">Added: {business.addedDate}</span>
                  </div>

                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-gray-600">{business.industry}</span>
                    <span className="text-sm text-gray-600">{business.location}</span>
                    <span className="text-sm text-gray-600">{business.revenue}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/business/${business.id}`}>View</Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
