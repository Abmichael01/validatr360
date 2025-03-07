import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FancyButton from "@/components/ui/FancyButton";
import { BotIcon, BrickWall, LayoutTemplate } from "lucide-react";
import React from "react";
import FunnelNameDialog from "../../../components/Dashboard/Forms/FormNameDialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const methods = [
  {
    id: 1,
    title: "Start from Scratch",
    description:
      "Use this method if you want to completely build your funnel from scratch",
    icon: BrickWall,
  },
  {
    id: 2,
    title: "Browse Templates",
    description:
      "Browse ready made template, select the one that suites your needs, edit and make it yours",
    icon: LayoutTemplate,
  },
  {
    id: 3,
    title: "Build with AI",
    description:
      "Describe what you want to our AI builder and it does all the work building the funnel as you have described",
    icon: BotIcon,
  },
];

const CreateForm: React.FC = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-center text-lg font-semibold">
        Choose how you want to create your form
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:px-10 ">
        {methods.map((method, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex flex-col items-center gap-5 justify-center">
                <method.icon className="text-primary size-8" />
                <CardTitle>{method.title}</CardTitle>
              </div>
              <CardDescription className="text-center">
                {method.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
                <Dialog>
                    <DialogTrigger className="w-full">
                        <FancyButton
                          effectColor="group-hover:size-70 duration-700"
                          className="w-full"
                        >
                          {method.title}
                        </FancyButton>
                    </DialogTrigger>
                    <DialogContent>
                        <FunnelNameDialog method={method.id} />
                    </DialogContent>
                </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </div>
  );
};

export default CreateForm;
