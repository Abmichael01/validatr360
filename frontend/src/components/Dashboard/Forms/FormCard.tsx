import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Globe, Link, Trash, MoreVertical, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

interface FormProps {
  name: string;
  leads: number;
}

export default function FormCard({ form }: { form: FormProps }) {
  return (
    <Card className="hover:border-primary/50 transition-colors group relative overflow-hidden">
      <CardHeader className="flex flex-row justify-between pb-2">
        <div className="flex gap-2">
          <img
            src="/form.png"
            alt="form-preview"
            className="size-16 border rounded"
          />
          <CardTitle className="text-sm font-medium">{form.name}</CardTitle>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="absolute top-2 right-2 px-3 py-2 hover:bg-gray-100 rounded-md outline-0 "
            >
              <MoreVertical className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Globe className="mr-2 h-4 w-4" />
              Publish
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="mr-2 h-4 w-4" />
              Copy Link
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Badge
              variant="secondary"
              className="bg-primary/10 hover:bg-primary/20 text-primary"
            >
              {form.leads} leads
            </Badge>
            <div className="flex gap-4 items-center">
              <div>
                <Tooltip>
                  <TooltipTrigger>
                    <Switch id="form-is-active" />
                  </TooltipTrigger>
                  <TooltipContent>Toggle Form</TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Tooltip>
                  <TooltipTrigger>
                    <Eye className="text-foreground/70" />
                  </TooltipTrigger>
                  <TooltipContent>Preview</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// const FormMore: React.FC = () => {
//   return (

//   );
// };
