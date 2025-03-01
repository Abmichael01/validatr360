import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from "lucide-react"
import LeadAnalyticsCard from "./LeadAnalyticsCard"
import CampaignCard from "./CampaignCard"

// Mock data for leads and campaigns with more pronounced zigzag patterns
const leadsData = {
  total: {
    current: 1234,
    change: 8.1,
    data: [
      { date: "Mon", value: 800 },
      { date: "Tue", value: 1200 },
      { date: "Wed", value: 900 },
      { date: "Thu", value: 1400 },
      { date: "Fri", value: 1000 },
      { date: "Sat", value: 1234 },
    ],
  },
  hot: {
    current: 456,
    change: 12.5,
    data: [
      { date: "Mon", value: 200 },
      { date: "Tue", value: 450 },
      { date: "Wed", value: 300 },
      { date: "Thu", value: 500 },
      { date: "Fri", value: 350 },
      { date: "Sat", value: 456 },
    ],
  },
  warm: {
    current: 543,
    change: 5.2,
    data: [
      { date: "Mon", value: 400 },
      { date: "Tue", value: 600 },
      { date: "Wed", value: 450 },
      { date: "Thu", value: 700 },
      { date: "Fri", value: 500 },
      { date: "Sat", value: 543 },
    ],
  },
  cold: {
    current: 235,
    change: -3.8,
    data: [
      { date: "Mon", value: 300 },
      { date: "Tue", value: 200 },
      { date: "Wed", value: 250 },
      { date: "Thu", value: 150 },
      { date: "Fri", value: 220 },
      { date: "Sat", value: 235 },
    ],
  },
}

const campaignsData = [
  { id: 1, name: "Summer Sale", status: "Active", leads: 234, progress: 75 },
  { id: 2, name: "Product Launch", status: "Scheduled", leads: 0, progress: 0 },
  { id: 3, name: "Email Newsletter", status: "Active", leads: 567, progress: 90 },
]

export function Overview() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <LeadAnalyticsCard title="Total Leads" data={leadsData.total} />
        <LeadAnalyticsCard title="Hot Leads" data={leadsData.hot} />
        <LeadAnalyticsCard title="Warm Leads" data={leadsData.warm} />
        <LeadAnalyticsCard title="Cold Leads" data={leadsData.cold} />
      </div>

      <Separator className="my-8" />

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Campaigns</h2>
          <Button variant="outline">
            See All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {campaignsData.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  )
}

