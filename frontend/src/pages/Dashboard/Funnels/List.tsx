import FunnelCard from "@/components/Dashboard/Funnels/FunnelCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const tabs = [
  {
    name: "All Funnels",
    id: "all",
  },
  {
    name: "Active Funnels",
    id: "active",
  },
  {
    name: "Completed Funnels",
    id: "completed",
  },
  {
    name: "InActive Funnels",
    id: "inactive",
  },
];

const FunnelsList: React.FC = () => {
  const [params] = useSearchParams();
  const currentTab = params.get("tab") || "all";
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    navigate(`/funnels/list?tab=${tab}`, { replace: true });
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="w-full sm:w-[80%] md:w-[70%]">
          <Input placeholder="Search Funnels" />
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant={"outline"} className="w-[90%] sm:w-[50%] py-5 sm:py-8 rounded-full sm:text-xl text-lg ">
            <Plus className="size-6" />
            Create New Funnel
        </Button>
      </div>
      <div className="grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              `rounded-full px-4 py-2 text-sm font-medium bg-foreground/10 text-nowrap`,
              currentTab === tab.id && "bg-primary text-white",
              "w-full"
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index}>
            <FunnelCard
              funnel={{
                name: `Funnel ${index + 1}`,
                conversions: Math.floor(Math.random() * 1000),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunnelsList;
