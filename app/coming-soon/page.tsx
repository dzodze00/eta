import { ArrowRight, Mail, Phone, FileText, Video, Sparkles, Users, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ComingSoonPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Coming Soon to Kivo</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're building powerful tools to help you connect with business owners and close deals faster. Here's a
          preview of what's coming next.
        </p>
      </div>

      <div className="mb-12">
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6 shadow-sm border border-purple-200">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Badge className="bg-purple-600 mb-3">Featured</Badge>
              <h2 className="text-2xl font-bold mb-2">Bespoke AI Outreach Suite</h2>
              <p className="text-gray-700 mb-4">
                Our AI tools create truly personalized outreach materials that leverage your unique affiliations with
                business owners. Each message is custom-crafted to maximize your chances of getting a response.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white">
                  3x higher response rates
                </Badge>
                <Badge variant="outline" className="bg-white">
                  Personalized to each owner
                </Badge>
                <Badge variant="outline" className="bg-white">
                  Leverages your affiliations
                </Badge>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
              <div className="text-sm text-gray-500 mb-2">Preview: Bespoke Email Template</div>
              <div className="border rounded-md p-3 text-sm space-y-3">
                <div>
                  <div className="font-medium">
                    Subject: Fellow <span className="bg-yellow-100 px-1">Stanford alum</span> interested in your
                    manufacturing business
                  </div>
                </div>
                <div>
                  <p>Dear John,</p>
                  <p className="mt-2">
                    I hope this email finds you well. My name is Sarah Johnson, and I'm reaching out because I noticed
                    we share a{" "}
                    <span className="bg-yellow-100 px-1">connection through Stanford's Engineering program</span>. I
                    graduated in 2010 with a focus on mechanical engineering, and I see from your LinkedIn that you were
                    there a few years before me.
                  </p>
                  <p className="mt-2">
                    I've spent the last decade working in manufacturing and am now looking to acquire a business in the{" "}
                    <span className="bg-yellow-100 px-1">Tampa area</span>, where I recently relocated. Your company's
                    reputation for quality and innovation caught my attention.
                  </p>
                  <p className="mt-2">
                    I'd love to schedule a brief call to introduce myself properly and learn more about your business
                    journey. Would you have 15 minutes available next week?
                  </p>
                  <p className="mt-2">
                    Best regards,
                    <br />
                    Sarah
                  </p>
                </div>
                <div className="text-xs text-purple-600 italic">
                  Note: Yellow highlights show how your specific affiliations are woven naturally into the message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Upcoming Bespoke Outreach Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-purple-600" />
                  Bespoke Email Templates
                </CardTitle>
                <CardDescription>Launching in 2 weeks</CardDescription>
              </div>
              <Badge className="bg-green-600">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              AI-generated email templates that are completely customized to each business owner, incorporating your
              unique affiliations and the specific business details. Each template is crafted to maximize response
              rates.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                <span>Personalized subject lines with your strongest affiliation</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-purple-600 mr-2" />
                <span>Natural integration of your shared connections</span>
              </div>
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-purple-600 mr-2" />
                <span>Optimized for 3x higher response rates</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Join Waitlist
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-purple-600" />
                  Bespoke Call Scripts
                </CardTitle>
                <CardDescription>Launching in 1 month</CardDescription>
              </div>
              <Badge className="bg-orange-500">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Tailored call scripts that help you navigate conversations with business owners confidently. Each script
              is uniquely crafted based on your affiliations, the business details, and succession clues.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-purple-600 mr-2" />
                <span>Timing suggestions based on succession readiness</span>
              </div>
              <div className="flex items-center text-sm">
                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                <span>Natural conversation starters using shared backgrounds</span>
              </div>
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-purple-600 mr-2" />
                <span>Objection handling tailored to the business</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Join Waitlist
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-purple-600" />
                  Bespoke Letter Templates
                </CardTitle>
                <CardDescription>Launching in 2 months</CardDescription>
              </div>
              <Badge className="bg-blue-600">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Completely personalized letter templates for direct mail outreach. These bespoke letters are designed to
              stand out from digital communication and create a memorable impression with business owners.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                <span>Professional formatting with personal touches</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-purple-600 mr-2" />
                <span>Subtle integration of your shared affiliations</span>
              </div>
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-purple-600 mr-2" />
                <span>Proven to reach owners who don't respond to email</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Join Waitlist
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Video className="mr-2 h-5 w-5 text-purple-600" />
                  Bespoke Video Messages
                </CardTitle>
                <CardDescription>Launching in 3 months</CardDescription>
              </div>
              <Badge className="bg-gray-600">Coming Soon</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              AI-assisted video message scripts that help you create highly personalized video outreach. These bespoke
              video templates guide you through creating compelling video messages that showcase your personality.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                <span>Personalized script with talking points</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 text-purple-600 mr-2" />
                <span>Guidance on mentioning shared affiliations</span>
              </div>
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-purple-600 mr-2" />
                <span>5x higher engagement than standard outreach</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Join Waitlist
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Want Early Access?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our waitlist to be among the first to try our bespoke AI outreach tools and get a 50% discount on your
          first month.
        </p>
        <Button className="bg-white text-purple-800 hover:bg-gray-100">Join the Waitlist</Button>
      </div>
    </div>
  )
}
