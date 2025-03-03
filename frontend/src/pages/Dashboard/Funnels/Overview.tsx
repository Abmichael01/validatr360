import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Plus, CheckCircle, FilterIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FunnelCard from "@/components/Dashboard/Funnels/FunnelCard";

// Mock data for funnels and forms
const analyticsData = {
  totalFunnels: 15,
  activeFunnels: 8,
  totalForms: 25,
  activeForms: 18,
  growthData: [
    { date: "Jan", funnels: 10, forms: 15 },
    { date: "Feb", funnels: 12, forms: 18 },
    { date: "Mar", funnels: 11, forms: 20 },
    { date: "Apr", funnels: 15, forms: 22 },
    { date: "May", funnels: 14, forms: 24 },
    { date: "Jun", funnels: 15, forms: 25 },
  ],
};

const recentFunnels = [
  { id: 1, name: "Product Launch", forms: 3, conversions: 234 },
  { id: 2, name: "Newsletter Signup", forms: 1, conversions: 567 },
  { id: 3, name: "Free Trial", forms: 2, conversions: 189 },
];

export function FunnelsOverview() {
  return (
    <div className="p-6 space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/funnels">Funnels</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Overview</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Create New Funnel
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AnalyticsCard
          title="Total Funnels"
          value={analyticsData.totalFunnels}
          icon={FilterIcon}
        />
        <AnalyticsCard
          title="Active Funnels"
          value={analyticsData.activeFunnels}
          icon={CheckCircle}
        />
        <AnalyticsCard
          title="InActive Funnels"
          value={analyticsData.activeFunnels}
          icon={CheckCircle}
        />
        <AnalyticsCard
          title="Completed Funnels"
          value={analyticsData.activeFunnels}
          icon={CheckCircle}
        />
      </div>

      <Separator className="my-8" />

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Recent Funnels
          </h3>
          <Link to="/funnels/list">
            <Button variant="outline">
              See All Funnels
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {recentFunnels.map((funnel) => (
            <div>
              <FunnelCard funnel={funnel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard({
  title,
  value,
}: {
  title: string;
  value: number;
  icon: React.ElementType;
}) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Link to="#">
          <Badge>
            {/* <FilterIcon /> */}
          </Badge>
          <div className="size-2 rounded-full bg-primary"></div>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
