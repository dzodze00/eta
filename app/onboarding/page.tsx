"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Building,
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  Heart,
  BookOpen,
  Info,
  Plus,
  Trash2,
  CheckCircle,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Basic Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentLocation: "",
    hometown: "",

    // Education
    schools: [] as {
      name: string
      degree: string
      fieldOfStudy: string
      startYear: string
      endYear: string
    }[],
    languages: [] as string[],

    // Professional Background
    workHistory: "",
    industries: [] as string[],
    professionalAssociations: [] as string[],
    militaryService: "",

    // Interests & Affiliations
    hobbies: [] as string[],
    sports: [] as string[],
    communityInvolvement: [] as string[],
    clubs: [] as string[],
    religiousAffiliations: "",

    // Business Preferences
    businessInterests: "",
    preferredIndustries: [] as string[],
    locationPreferences: [] as string[],
    investmentRange: "",
    timeframe: "",
    revenueRange: "", // New field
    acquisitionTimeline: "", // New field

    // Additional Information
    additionalInfo: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleArrayChange = (name: string, value: string) => {
    setFormData((prev) => {
      const currentArray = prev[name as keyof typeof prev] as string[]
      if (Array.isArray(currentArray)) {
        if (currentArray.includes(value)) {
          return { ...prev, [name]: currentArray.filter((item) => item !== value) }
        } else {
          return { ...prev, [name]: [...currentArray, value] }
        }
      }
      return prev
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const addSchool = () => {
    setFormData((prev) => ({
      ...prev,
      schools: [...prev.schools, { name: "", degree: "", fieldOfStudy: "", startYear: "", endYear: "" }],
    }))
  }

  const updateSchool = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const updatedSchools = [...prev.schools]
      updatedSchools[index] = { ...updatedSchools[index], [field]: value }
      return { ...prev, schools: updatedSchools }
    })
  }

  const removeSchool = (index: number) => {
    setFormData((prev) => {
      const updatedSchools = [...prev.schools]
      updatedSchools.splice(index, 1)
      return { ...prev, schools: updatedSchools }
    })
  }

  const nextStep = () => {
    // Validate current step before proceeding
    const currentErrors = validateStep(step)

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors)
      // Scroll to the first error
      const firstErrorField = document.getElementById(Object.keys(currentErrors)[0])
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    // Clear errors and proceed to next step
    setErrors({})
    window.scrollTo(0, 0)
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    window.scrollTo(0, 0)
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate current step before submission
    const currentErrors = validateStep(step)

    if (Object.keys(currentErrors).length > 0) {
      setErrors(currentErrors)
      // Scroll to the first error
      const firstErrorField = document.getElementById(Object.keys(currentErrors)[0])
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    // Proceed with submission
    router.push("/search-criteria")
  }

  const validateStep = (currentStep: number): Record<string, string> => {
    const stepErrors: Record<string, string> = {}

    if (currentStep === 1) {
      // Basic Information validation
      if (!formData.firstName.trim()) stepErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) stepErrors.lastName = "Last name is required"
      if (!formData.email.trim()) stepErrors.email = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) stepErrors.email = "Email is invalid"
      if (!formData.currentLocation.trim()) stepErrors.currentLocation = "Current location is required"
    } else if (currentStep === 2) {
      // Education validation
      // We'll just validate that if schools are added, they have required fields
      formData.schools.forEach((school, index) => {
        if (school.name.trim() && !school.degree.trim()) stepErrors[`school-degree-${index}`] = "Degree is required"
        if (school.name.trim() && !school.fieldOfStudy.trim())
          stepErrors[`school-field-${index}`] = "Field of study is required"
      })
    } else if (currentStep === 3) {
      // Professional Background validation
      // Optional fields, no strict validation needed
    } else if (currentStep === 4) {
      // Personal Interests validation
      // Optional fields, no strict validation needed
    } else if (currentStep === 5) {
      // Business Preferences validation
      if (!formData.investmentRange) stepErrors.investmentRange = "Investment range is required"
      if (!formData.timeframe) stepErrors.timeframe = "Acquisition timeframe is required"
    } else if (currentStep === 6) {
      // Additional Information validation
      if (!formData.revenueRange) stepErrors.revenueRange = "Revenue range is required"
      if (!formData.acquisitionTimeline) stepErrors.acquisitionTimeline = "Acquisition timeline is required"
    }

    return stepErrors
  }

  const totalSteps = 6
  const progress = (step / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Kivo</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Already have an account?</span>
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Create Your Profile</h1>
              <div className="text-sm text-gray-500">
                Step {step} of {totalSteps}
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="mb-6 shadow-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="h-5 w-5 text-purple-600" />
                      <h2 className="text-xl font-semibold">Basic Information</h2>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                        <p className="font-medium">Please correct the following errors:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                          {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 mb-6">
                      Let's start with the essentials so we can personalize your experience.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="flex items-center">
                          First Name*
                          {errors.firstName && <span className="ml-2 text-xs text-red-500">{errors.firstName}</span>}
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className={errors.firstName ? "border-red-500 focus:ring-red-500" : ""}
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastName" className="flex items-center">
                          Last Name*
                          {errors.lastName && <span className="ml-2 text-xs text-red-500">{errors.lastName}</span>}
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                          className={errors.lastName ? "border-red-500 focus:ring-red-500" : ""}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="flex items-center">
                          Email Address*
                          {errors.email && <span className="ml-2 text-xs text-red-500">{errors.email}</span>}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="currentLocation" className="flex items-center">
                        Current Location*
                        {errors.currentLocation && (
                          <span className="ml-2 text-xs text-red-500">{errors.currentLocation}</span>
                        )}
                      </Label>
                      <Input
                        id="currentLocation"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleChange}
                        placeholder="City, State"
                        required
                        className={errors.currentLocation ? "border-red-500 focus:ring-red-500" : ""}
                      />
                    </div>

                    <div>
                      <Label htmlFor="hometown">Hometown</Label>
                      <Input
                        id="hometown"
                        name="hometown"
                        value={formData.hometown}
                        onChange={handleChange}
                        placeholder="City, State"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This helps us find business owners from your hometown area
                      </p>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                      <h2 className="text-xl font-semibold">Education</h2>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                        <p className="font-medium">Please correct the following errors:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                          {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 mb-6">
                      Your educational background can help us find meaningful connections with business owners.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label>Education History</Label>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={addSchool}
                          className="flex items-center gap-1"
                        >
                          <Plus className="h-4 w-4" />
                          Add School
                        </Button>
                      </div>

                      {formData.schools.length === 0 ? (
                        <div className="text-center py-8 border border-dashed rounded-md">
                          <p className="text-gray-500 mb-4">No schools added yet</p>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={addSchool}
                            className="flex items-center gap-1"
                          >
                            <Plus className="h-4 w-4" />
                            Add Education
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {formData.schools.map((school, index) => (
                            <Card key={index} className="border border-gray-200">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-4">
                                  <h3 className="font-medium">School #{index + 1}</h3>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeSchool(index)}
                                    className="text-red-500 h-8 w-8 p-0"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                                <div className="space-y-3">
                                  <div>
                                    <Label htmlFor={`school-name-${index}`}>School Name</Label>
                                    <Input
                                      id={`school-name-${index}`}
                                      value={school.name}
                                      onChange={(e) => updateSchool(index, "name", e.target.value)}
                                      placeholder="Harvard University"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <Label htmlFor={`degree-${index}`} className="flex items-center">
                                        Degree
                                        {errors[`school-degree-${index}`] && (
                                          <span className="ml-2 text-xs text-red-500">
                                            {errors[`school-degree-${index}`]}
                                          </span>
                                        )}
                                      </Label>
                                      <Input
                                        id={`degree-${index}`}
                                        value={school.degree}
                                        onChange={(e) => updateSchool(index, "degree", e.target.value)}
                                        placeholder="MBA, BS, etc."
                                        className={
                                          errors[`school-degree-${index}`] ? "border-red-500 focus:ring-red-500" : ""
                                        }
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor={`field-${index}`} className="flex items-center">
                                        Field of Study
                                        {errors[`school-field-${index}`] && (
                                          <span className="ml-2 text-xs text-red-500">
                                            {errors[`school-field-${index}`]}
                                          </span>
                                        )}
                                      </Label>
                                      <Input
                                        id={`field-${index}`}
                                        value={school.fieldOfStudy}
                                        onChange={(e) => updateSchool(index, "fieldOfStudy", e.target.value)}
                                        placeholder="Business, Engineering, etc."
                                        className={
                                          errors[`school-field-${index}`] ? "border-red-500 focus:ring-red-500" : ""
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    <div>
                                      <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                                      <Input
                                        id={`start-year-${index}`}
                                        value={school.startYear}
                                        onChange={(e) => updateSchool(index, "startYear", e.target.value)}
                                        placeholder="2010"
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor={`end-year-${index}`}>End Year</Label>
                                      <Input
                                        id={`end-year-${index}`}
                                        value={school.endYear}
                                        onChange={(e) => updateSchool(index, "endYear", e.target.value)}
                                        placeholder="2014"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <Label>Languages Spoken</Label>
                      <div className="grid md:grid-cols-3 gap-2 mt-2">
                        {[
                          "English",
                          "Spanish",
                          "French",
                          "German",
                          "Mandarin",
                          "Cantonese",
                          "Japanese",
                          "Korean",
                          "Italian",
                          "Portuguese",
                          "Russian",
                          "Arabic",
                          "Hindi",
                        ].map((language) => (
                          <div key={language} className="flex items-center space-x-2">
                            <Checkbox
                              id={`language-${language}`}
                              checked={formData.languages.includes(language)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("languages", language)
                                } else {
                                  handleArrayChange("languages", language)
                                }
                              }}
                            />
                            <Label htmlFor={`language-${language}`} className="text-sm font-normal">
                              {language}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                      <h2 className="text-xl font-semibold">Professional Background</h2>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                        <p className="font-medium">Please correct the following errors:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                          {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 mb-6">
                      Tell us about your work experience to help find businesses with potential connections.
                    </p>

                    <div>
                      <Label htmlFor="workHistory">Work History</Label>
                      <Textarea
                        id="workHistory"
                        name="workHistory"
                        value={formData.workHistory}
                        onChange={handleChange}
                        placeholder="VP of Operations, Tech Company (2018-Present)
Product Manager, Fortune 500 (2011-2018)
Consultant, Consulting Firm (2007-2011)"
                        rows={5}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        List each position on a new line. Include company name and years.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Label>Industries You've Worked In</Label>
                      <div className="grid md:grid-cols-3 gap-2">
                        {[
                          "Technology",
                          "Healthcare",
                          "Finance",
                          "Manufacturing",
                          "Retail",
                          "Education",
                          "Real Estate",
                          "Construction",
                          "Hospitality",
                          "Transportation",
                          "Energy",
                          "Agriculture",
                          "Professional Services",
                          "Media & Entertainment",
                          "Government",
                        ].map((industry) => (
                          <div key={industry} className="flex items-center space-x-2">
                            <Checkbox
                              id={`industry-${industry}`}
                              checked={formData.industries.includes(industry)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("industries", industry)
                                } else {
                                  handleArrayChange("industries", industry)
                                }
                              }}
                            />
                            <Label htmlFor={`industry-${industry}`} className="text-sm font-normal">
                              {industry}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Professional Associations & Certifications</Label>
                      <div className="grid md:grid-cols-2 gap-2">
                        {[
                          "CPA",
                          "MBA Association",
                          "Bar Association",
                          "Medical Association",
                          "IEEE",
                          "Project Management Institute",
                          "American Marketing Association",
                          "Society of Human Resource Management",
                          "National Association of Realtors",
                          "American Institute of Architects",
                        ].map((association) => (
                          <div key={association} className="flex items-center space-x-2">
                            <Checkbox
                              id={`association-${association}`}
                              checked={formData.professionalAssociations.includes(association)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("professionalAssociations", association)
                                } else {
                                  handleArrayChange("professionalAssociations", association)
                                }
                              }}
                            />
                            <Label htmlFor={`association-${association}`} className="text-sm font-normal">
                              {association}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="militaryService">Military Service (if applicable)</Label>
                      <Input
                        id="militaryService"
                        name="militaryService"
                        value={formData.militaryService}
                        onChange={handleChange}
                        placeholder="Branch, Rank, Years Served"
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="h-5 w-5 text-purple-600" />
                      <h2 className="text-xl font-semibold">Personal Interests & Hobbies</h2>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                        <p className="font-medium">Please correct the following errors:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                          {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 mb-6">
                      Shared interests can create strong connections with business owners. Tell us about your hobbies
                      and activities.
                    </p>

                    <div className="space-y-3">
                      <Label>Hobbies & Interests</Label>
                      <div className="grid md:grid-cols-3 gap-2">
                        {[
                          "Golf",
                          "Tennis",
                          "Fishing",
                          "Hunting",
                          "Boating",
                          "Skiing",
                          "Running",
                          "Cycling",
                          "Hiking",
                          "Photography",
                          "Cooking",
                          "Wine Tasting",
                          "Travel",
                          "Reading",
                          "Art Collecting",
                          "Classic Cars",
                          "Woodworking",
                          "Gardening",
                          "Music",
                          "Theater",
                          "Volunteering",
                        ].map((hobby) => (
                          <div key={hobby} className="flex items-center space-x-2">
                            <Checkbox
                              id={`hobby-${hobby}`}
                              checked={formData.hobbies.includes(hobby)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("hobbies", hobby)
                                } else {
                                  handleArrayChange("hobbies", hobby)
                                }
                              }}
                            />
                            <Label htmlFor={`hobby-${hobby}`} className="text-sm font-normal">
                              {hobby}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Sports & Athletic Activities</Label>
                      <div className="grid md:grid-cols-3 gap-2">
                        {[
                          "Football",
                          "Basketball",
                          "Baseball",
                          "Soccer",
                          "Hockey",
                          "Volleyball",
                          "Swimming",
                          "Martial Arts",
                          "Yoga",
                          "CrossFit",
                          "Weightlifting",
                          "Triathlon",
                          "Marathon",
                        ].map((sport) => (
                          <div key={sport} className="flex items-center space-x-2">
                            <Checkbox
                              id={`sport-${sport}`}
                              checked={formData.sports.includes(sport)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("sports", sport)
                                } else {
                                  handleArrayChange("sports", sport)
                                }
                              }}
                            />
                            <Label htmlFor={`sport-${sport}`} className="text-sm font-normal">
                              {sport}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Community Involvement</Label>
                      <div className="grid md:grid-cols-2 gap-2">
                        {[
                          "Rotary Club",
                          "Lions Club",
                          "Kiwanis",
                          "Chamber of Commerce",
                          "School Board",
                          "Local Politics",
                          "Charity Board Member",
                          "Religious Organization",
                          "Volunteer Firefighter",
                          "Habitat for Humanity",
                          "Food Bank Volunteer",
                          "Mentor Program",
                        ].map((community) => (
                          <div key={community} className="flex items-center space-x-2">
                            <Checkbox
                              id={`community-${community}`}
                              checked={formData.communityInvolvement.includes(community)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("communityInvolvement", community)
                                } else {
                                  handleArrayChange("communityInvolvement", community)
                                }
                              }}
                            />
                            <Label htmlFor={`community-${community}`} className="text-sm font-normal">
                              {community}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Clubs & Memberships</Label>
                      <div className="grid md:grid-cols-2 gap-2">
                        {[
                          "Country Club",
                          "Athletic Club",
                          "Yacht Club",
                          "Social Club",
                          "Alumni Club",
                          "Professional Club",
                          "Book Club",
                          "Investment Club",
                          "Wine Club",
                          "Hunting/Fishing Club",
                        ].map((club) => (
                          <div key={club} className="flex items-center space-x-2">
                            <Checkbox
                              id={`club-${club}`}
                              checked={formData.clubs.includes(club)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("clubs", club)
                                } else {
                                  handleArrayChange("clubs", club)
                                }
                              }}
                            />
                            <Label htmlFor={`club-${club}`} className="text-sm font-normal">
                              {club}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="religiousAffiliations">Religious Affiliations (Optional)</Label>
                      <Input
                        id="religiousAffiliations"
                        name="religiousAffiliations"
                        value={formData.religiousAffiliations}
                        onChange={handleChange}
                        placeholder="e.g., Catholic, Protestant, Jewish, Muslim, etc."
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        This information is optional and only used to find potential connections
                      </p>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="h-5 w-5 text-purple-600" />
                      <h2 className="text-xl font-semibold">Business Preferences</h2>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                        <p className="font-medium">Please correct the following errors:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                          {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 mb-6">
                      Help us understand what you're looking for in a business acquisition.
                    </p>

                    <div>
                      <Label htmlFor="businessInterests">Business Acquisition Goals</Label>
                      <Textarea
                        id="businessInterests"
                        name="businessInterests"
                        value={formData.businessInterests}
                        onChange={handleChange}
                        placeholder="I'm interested in manufacturing businesses with $500K-$2M in EBITDA, preferably in the Midwest. Looking for an owner who wants to transition over 6-12 months."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Industries</Label>
                      <div className="grid md:grid-cols-3 gap-2">
                        {[
                          "Manufacturing",
                          "Distribution",
                          "Healthcare",
                          "Technology",
                          "Professional Services",
                          "Construction",
                          "Retail",
                          "Food & Beverage",
                          "Automotive",
                          "Education",
                          "Transportation",
                          "Real Estate",
                          "Home Services",
                          "Financial Services",
                          "Hospitality",
                        ].map((industry) => (
                          <div key={industry} className="flex items-center space-x-2">
                            <Checkbox
                              id={`preferred-${industry}`}
                              checked={formData.preferredIndustries.includes(industry)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("preferredIndustries", industry)
                                } else {
                                  handleArrayChange("preferredIndustries", industry)
                                }
                              }}
                            />
                            <Label htmlFor={`preferred-${industry}`} className="text-sm font-normal">
                              {industry}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Location Preferences</Label>
                      <div className="grid md:grid-cols-3 gap-2">
                        {[
                          "Northeast",
                          "Mid-Atlantic",
                          "Southeast",
                          "Midwest",
                          "Southwest",
                          "West Coast",
                          "Northwest",
                          "Rocky Mountain",
                          "Hawaii/Alaska",
                          "No Preference",
                        ].map((location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox
                              id={`location-${location}`}
                              checked={formData.locationPreferences.includes(location)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleArrayChange("locationPreferences", location)
                                } else {
                                  handleArrayChange("locationPreferences", location)
                                }
                              }}
                            />
                            <Label htmlFor={`location-${location}`} className="text-sm font-normal">
                              {location}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="investmentRange" className="flex items-center">
                        Investment Range*
                        {errors.investmentRange && (
                          <span className="ml-2 text-xs text-red-500">{errors.investmentRange}</span>
                        )}
                      </Label>
                      <Select
                        id="investmentRange"
                        onValueChange={(value) => handleSelectChange("investmentRange", value)}
                        defaultValue={formData.investmentRange}
                        className={errors.investmentRange ? "border-red-500 focus:ring-red-500" : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under $500K</SelectItem>
                          <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                          <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                          <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                          <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                          <SelectItem value="over-10m">Over $10M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeframe" className="flex items-center">
                        Acquisition Timeframe*
                        {errors.timeframe && <span className="ml-2 text-xs text-red-500">{errors.timeframe}</span>}
                      </Label>
                      <Select
                        id="timeframe"
                        onValueChange={(value) => handleSelectChange("timeframe", value)}
                        defaultValue={formData.timeframe}
                        className={errors.timeframe ? "border-red-500 focus:ring-red-500" : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-6-months">0-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="1-2-years">1-2 years</SelectItem>
                          <SelectItem value="2-plus-years">2+ years</SelectItem>
                          <SelectItem value="just-exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Info className="h-5 w-5 text-purple-600" />
                      <h2 className="text-xl font-semibold">Additional Information</h2>
                    </div>
                    {Object.keys(errors).length > 0 && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                        <p className="font-medium">Please correct the following errors:</p>
                        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                          {Object.values(errors).map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-gray-600 mb-6">
                      Almost done! Please review your information and add any additional details that might help us find
                      the perfect business match.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="revenueRange" className="flex items-center">
                          Target Business Revenue Range*
                          {errors.revenueRange && (
                            <span className="ml-2 text-xs text-red-500">{errors.revenueRange}</span>
                          )}
                        </Label>
                        <div className="relative">
                          <select
                            id="revenueRange"
                            name="revenueRange"
                            value={formData.revenueRange}
                            onChange={handleChange}
                            className={`flex h-10 w-full appearance-none rounded-md border ${
                              errors.revenueRange ? "border-red-500" : "border-purple-300"
                            } bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                              errors.revenueRange ? "focus:ring-red-500" : "focus:ring-purple-600"
                            } focus:border-purple-600 disabled:cursor-not-allowed disabled:opacity-50`}
                          >
                            <option value="" disabled>
                              Select revenue range
                            </option>
                            <option value="under-1m">Under $1M</option>
                            <option value="1m-5m">$1M - $5M</option>
                            <option value="5m-10m">$5M - $10M</option>
                            <option value="10m-25m">$10M - $25M</option>
                            <option value="25m-50m">$25M - $50M</option>
                            <option value="over-50m">Over $50M</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="acquisitionTimeline" className="flex items-center">
                          When Do You Plan to Acquire?*
                          {errors.acquisitionTimeline && (
                            <span className="ml-2 text-xs text-red-500">{errors.acquisitionTimeline}</span>
                          )}
                        </Label>
                        <div className="relative">
                          <select
                            id="acquisitionTimeline"
                            name="acquisitionTimeline"
                            value={formData.acquisitionTimeline}
                            onChange={handleChange}
                            className={`flex h-10 w-full appearance-none rounded-md border ${
                              errors.acquisitionTimeline ? "border-red-500" : "border-purple-300"
                            } bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                              errors.acquisitionTimeline ? "focus:ring-red-500" : "focus:ring-purple-600"
                            } focus:border-purple-600 disabled:cursor-not-allowed disabled:opacity-50`}
                          >
                            <option value="" disabled>
                              Select timeline
                            </option>
                            <option value="0-6-months">Within 6 months</option>
                            <option value="6-12-months">6-12 months</option>
                            <option value="1-2-years">1-2 years</option>
                            <option value="2-3-years">2-3 years</option>
                            <option value="3-plus-years">3+ years</option>
                            <option value="just-exploring">Just exploring</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Anything Else We Should Know?</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Any additional information that might help us find businesses with strong connections to your background..."
                        rows={4}
                      />
                    </div>

                    <div className="bg-purple-50 p-4 rounded-md border border-purple-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-purple-800">How We Use Your Information</h3>
                          <p className="text-sm text-purple-700 mt-1">
                            The detailed information you've provided helps us identify meaningful connections between
                            you and business owners. These connections can significantly increase your chances of
                            successful outreach and acquisition.
                          </p>
                          <ul className="text-sm text-purple-700 mt-2 space-y-1">
                            <li className="flex items-start gap-1">
                              <span className="text-purple-600">•</span>
                              <span>
                                We'll match your background with business owners who share similar interests, education,
                                or experiences
                              </span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-purple-600">•</span>
                              <span>Your information is kept private and only used to find relevant connections</span>
                            </li>
                            <li className="flex items-start gap-1">
                              <span className="text-purple-600">•</span>
                              <span>The more details you provide, the better matches we can find for you</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {step < totalSteps ? (
                    <Button type="button" onClick={nextStep} className="bg-purple-600 hover:bg-purple-700">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                      Complete Profile
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {step < totalSteps && (
            <div className="text-center">
              <Button variant="link" onClick={() => router.push("/search-criteria")}>
                Skip for now (you can complete your profile later)
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
