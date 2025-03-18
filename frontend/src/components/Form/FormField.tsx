import React from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FileUpload from "./FileUpload";
import { Field } from "@/types";

interface FormFieldProps {
  field: Field;
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  switch (field.answerType) {
    case "input":
      return <Input type="text" placeholder="Enter your answer" />;

    case "textarea":
      return <Textarea placeholder="Enter your answer" className="h-[100px] resize-y" />;

    case "dropdown":
      return (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {field.options?.map((option) => (
                <SelectItem key={option.label} value={option.label}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      );

    case "radio":
      return (
        <RadioGroup>
          {field.options?.map((option) => (
            <div key={option.label} className="flex items-center gap-2">
              <RadioGroupItem value={option.label} />
              <Label>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      );

    case "checkbox":
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <div key={option.label} className="flex items-center gap-2">
              <Checkbox id={option.label} />
              <Label htmlFor={option.label}>{option.label}</Label>
            </div>
          ))}
        </div>
      );

    case "file":
      return <FileUpload accept={{ "application/pdf": [".pdf"] }} />

    case "image":
      return <FileUpload  accept={{ "image/*": [] }} />;

    default:
      return null;
  }
};

export default FormField;
