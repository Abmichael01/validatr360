import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/types";
import { useFormField } from "@/hooks/useFormField";
import { useStandardFormStore } from "@/stores/standardFormStore";

const formSchema = z
  .object({
    answerType: z.literal("textarea"),
    question: z.string().optional(), // Initially optional
    required: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // Apply validation only if "required" is checked
    if (data.required && (!data.question || data.question.trim().length < 2)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["question"],
        message: "Question is required and must be at least 2 characters.",
      });
    }
  });

interface Props {
  field?: Field;
}

const TextareaType: React.FC<Props> = ({ field }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: field?.question || "",
      answerType: "textarea",
      required: field?.required ?? false,
    },
  });

  const { submitText } = useStandardFormStore();
  const { add } = useFormField();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    add(values as Field);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Required Checkbox */}
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>Required</FormLabel>
            </FormItem>
          )}
        />

        {/* Question Input */}
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your question here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="float-right">
          {submitText}
        </Button>
      </form>
    </Form>
  );
};

export default TextareaType;
