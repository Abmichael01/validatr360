"use client";

import React, { useState } from "react";
import InputType from "./Questions/Input";
import TextareaType from "./Questions/TextareaType";
import SelectType from "./Questions/SelectType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field as FieldType } from "@/types"

type typeOfAnswers = string;

interface Props {
    field?: FieldType;
}

const Field: React.FC<Props> = ({ field }) => {
  // State to manage selected answer type
  const [answerType, setAnswerType] = useState<typeOfAnswers>(field?.answerType || "input");

  // Render the appropriate form based on answerType
  const renderQuestionForm = () => {
    switch (answerType) {
      case "input":
        return <InputType field={field} />;
      case "textarea":
        return <TextareaType field={field} />;
      case "dropdown":
      case "checkbox":
      case "radio":
        return <SelectType answerType={answerType} field={field} />;
      default:
        return null;
    }
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{field ? "Field 1" : "Add a new field to the form"}</CardTitle>
        <div className="flex flex-col gap-2">
          <label>Select the answer type of the field</label>
          <Select
            value={answerType}
            onValueChange={(value) => setAnswerType(value as typeOfAnswers)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select answer type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="input">Input</SelectItem>
              <SelectItem value="textarea">Textarea</SelectItem>
              <SelectItem value="dropdown">Dropdown</SelectItem>
              <SelectItem value="checkbox">Checkbox</SelectItem>
              <SelectItem value="radio">Radio</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      {/* Render the selected question form */}
      <CardContent>{renderQuestionForm()}</CardContent>
    </Card>
  );
};

export default Field;
