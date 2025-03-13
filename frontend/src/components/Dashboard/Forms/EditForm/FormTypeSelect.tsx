import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clipboard, LayoutTemplate,  Plus} from "lucide-react"; // Replace with the actual library you are using
import { useNavigate } from "react-router-dom";

const formTypes = [
  {
    title: "Standard Form",
    description: "Simple question list format. Easy & quick setup.",
    icon: Clipboard,
  },
  {
    title: "Interactive Form",
    description: "One question per step. Engaging & conversion-focused.",
    icon: Clipboard,
  },
  {
    title: "Multi-Step Landing Page",
    description: "Full-page experience. Collect leads & guide users.",
    icon: LayoutTemplate,
  },
];

interface Props {
  children: React.ReactNode;
  method: string;
}

const FormTypeSelect: React.FC<Props> = ({ children, method }) => {
    const navigate = useNavigate();
    const createForm = () => {
        if(method === "1") {
            navigate("/forms/121/edit/form-builder")
        } else if (method === "3") {
            navigate("/forms/121/edit/ai-form-builder")
        }
    }
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Form Type</DialogTitle>
          <DialogDescription>
            Choose the type of form you want to create
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8">
          {formTypes.map((formType, index) => (
            <div key={index} className="flex justify-between border rounded-xl p-5 shadow-sm">
              <div className="flex flex-col gap-1 justify-center">
                <h1 className="font-semibold flex items-center gap-2 text-sm"> <formType.icon className="size-5" /> {formType.title}</h1>
                <p className="text-xs">{formType.description}</p>
              </div>
              <Button onClick={createForm}>
                <Plus />
                Create this Form
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormTypeSelect;
