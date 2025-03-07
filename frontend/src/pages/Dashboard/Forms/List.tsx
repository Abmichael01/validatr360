import FormCard from "@/components/Dashboard/Forms/FormCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const tabs = [
  {
    name: "All Forms",
    id: "all",
  },
  {
    name: "Active Forms",
    id: "active",
  },
  {
    name: "Completed Forms",
    id: "completed",
  },
  {
    name: "InActive Forms",
    id: "inactive",
  },
];

const FunnelsList: React.FC = () => {
  const [params] = useSearchParams();
  const currentTab = params.get("tab") || "all";
  const navigate = useNavigate();

  const handleTabChange = (tab: string) => {
    navigate(`/forms/list?tab=${tab}`, { replace: true });
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="w-full sm:w-[80%] md:w-[70%]">
          <Input placeholder="Search Forms" />
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/forms/create-form" className="w-[90%] sm:w-[50%]">
          <Button
            variant={"outline"}
            className="w-full py-5 sm:py-8 rounded-full sm:text-xl text-lg "
          >
            <Plus className="size-6" />
            Create New Form
          </Button>
        </Link>
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
            <FormCard
              form={{
                name: `Form ${index + 1}`,
                leads: Math.floor(Math.random() * 1000),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunnelsList;
