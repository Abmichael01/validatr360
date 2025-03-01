import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { LineChart, Line, ResponsiveContainer } from "recharts"


export default function LeadAnalyticsCard({
  title,
  data,
}: {
  title: string
  data: { current: number; change: number; data: { date: string; value: number }[] }
}) {
  const trend = data.change >= 0 ? "up" : "down"

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Badge variant={trend === "up" ? "default" : "destructive"}>
          {trend === "up" ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {Math.abs(data.change)}%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.current.toLocaleString()}</div>
        <div className="h-[80px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={trend === "up" ? "var(--primary)" : "var(--destructive)"}
                strokeWidth={2}
                dot={{
                  r: 4,
                  fill: "var(--background)",
                  strokeWidth: 2,
                  stroke: trend === "up" ? "var(--primary)" : "var(--destructive)",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}


