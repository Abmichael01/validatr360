import FormCard from "@/components/Dashboard/Forms/FormCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";


const FunnelsList: React.FC = () => {
  
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
