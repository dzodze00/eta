import DealLensCard from "@/components/deal-lens-card"

export default function Dashboard() {
  // Sample business data with properly structured affiliations
  const sampleBusiness = {
    id: "1",
    name: "Acme Corp",
    industry: "Technology",
    location: "San Francisco, CA",
    revenue: "$5M - $10M",
    employees: 25,
    description:
      "Acme Corp is a leading provider of innovative technology solutions for small and medium-sized businesses. With a focus on cloud computing and cybersecurity, they help companies modernize their IT infrastructure.",
    affiliations: [
      {
        name: "John Smith",
        relationship: "Former employee",
        notes: "Worked as a senior developer from 2018-2020",
      },
      {
        name: "Sarah Johnson",
        relationship: "Industry connection",
        notes: "Met at TechCrunch conference 2022",
      },
    ],
    financials: {
      revenue: "$7.5M",
      ebitda: "$1.2M",
      askingPrice: "$15M",
    },
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 gap-8">
        <DealLensCard business={sampleBusiness} />
      </div>
    </div>
  )
}
