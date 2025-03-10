import type React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import FormCard from "@/components/Dashboard/Forms/FormCard";

const recentFunnels = [
  { id: 1, name: "Product Launch", forms: 3, leads: 234 },
  { id: 2, name: "Newsletter Signup", forms: 1, leads: 567 },
  { id: 3, name: "Free Trial", forms: 2, leads: 189 },
];

export const FormsOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/forms/create-form">
            <Button>
              <Plus className="" /> Create New Form
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Recent Forms
          </h3>
          <Link to="/forms/list">
            <Button variant="outline">
              See All Forms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {recentFunnels.map((form) => (
            <div>
              <FormCard form={form} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
