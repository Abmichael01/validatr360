import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Field } from "@/types";
import FormField from "@/components/Form/FormField";

const fields: Field[] = [
  {
    id: 1,
    answerType: "input",
    question: "What is your name?",
    required: true,
  },
  {
    id: 2,
    answerType: "textarea",
    question: "Describe your experience with our service.",
    required: false,
  },
  {
    id: 3,
    answerType: "dropdown",
    question: "Select your country of residence.",
    required: true,
    options: [
      { label: "United States" },
      { label: "Canada" },
      { label: "United Kingdom" },
      { label: "Australia" },
    ],
  },
  {
    id: 4,
    answerType: "checkbox",
    question: "Which languages do you speak?",
    required: false,
    options: [
      { label: "English" },
      { label: "Spanish" },
      { label: "French" },
      { label: "German" },
    ],
  },
  {
    id: 5,
    answerType: "radio",
    question: "What is your gender?",
    required: true,
    options: [{ label: "Male" }, { label: "Female" }, { label: "Other" }],
  },
  {
    id: 6,
    answerType: "file",
    question: "Upload your resume.",
    required: false,
  },
  {
    id: 7,
    answerType: "image",
    question: "Upload your profile picture.",
    required: true,
  },
];

const Form: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center p-5">
      <div className="w-full sm:w-[600px] space-y-10">
        <Card className="border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="uppercase">Survey Form</CardTitle>
            <CardContent className="px-0">
              <p className="text-sm text-muted-foreground">
                We value your feedback and are committed to improving our
                services to better meet your needs. Please take a few moments to
                fill out this form and share your thoughts, experiences, and
                suggestions. Your responses will help us enhance our offerings
                and provide you with the best possible experience. Thank you for
                your time and input!
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        {fields.map((field) => (
          <Card key={field.id} className="border-t-4 border-t-gray-500">
            <CardHeader>
              <CardTitle className="">
                {field.question}
                {field.required && <span className="text-red-500"> *</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FormField field={field} />
            </CardContent>
          </Card>
        ))}

        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default Form;
