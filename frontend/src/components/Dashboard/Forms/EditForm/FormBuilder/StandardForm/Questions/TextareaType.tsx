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
import { useStandarFormStore } from "@/stores/standardFormStore";
import { Field } from "@/types";
import { useFormField } from "@/hooks/useFormField";

const formSchema = z.object({
    answerType: z.literal("textarea"),
  question: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

interface Props {
    field?: Field;
}

const TextareaType: React.FC<Props> = ({ field }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        question: field?.question  || "",
        answerType: "textarea",
    },
  });
  const { submitText } = useStandarFormStore()
  const { add } = useFormField()

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    add(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your question here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="float-right"> {submitText} </Button>
      </form>
    </Form>
  );
};

export default TextareaType;
