import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CampaignCard({ campaign }: { campaign: { name: string; status: string; leads: number; progress: number } }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{campaign.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-2">
          <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>{campaign.status}</Badge>
          <span className="text-sm text-muted-foreground">{campaign.leads} leads</span>
        </div>
        <div className="w-full bg-secondary h-2 rounded-full mt-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: `${campaign.progress}%` }} />
        </div>
      </CardContent>
    </Card>
  )
}

