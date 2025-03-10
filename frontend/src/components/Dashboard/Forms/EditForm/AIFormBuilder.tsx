import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Stars } from "lucide-react";

const formSchema = z.object({
  prompt: z.string(),
});

const AIFormBuilder: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });


  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="space-y-6">
        <h1 className="text-xl font-bold">AI Form Builder</h1>
        <div className=" flex items-center gap-5 border rounded-full py-2 w-fit px-5 text-xs">
            <h1 className="font-semibold ">Form Type:</h1>
            <h1 className="rounded-full px-3 py-1 bg-primary font-semibold text-white">Standard Form</h1>
        </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Textarea
                      placeholder="Describe your form based on your form type relative"
                      {...field}
                      className="pt-10 h-[250px]"
                    />
                    <Badge className="mr-2 absolute top-2 left-2  px-4">
                      <Stars />
                      AI
                    </Badge>
                  </div>
                </FormControl>
                <FormDescription>
                  Try to give a detailed description of the form for more
                  accuracy. The AI can make mistakes, please review form before
                  publishing
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="float-right">
            Generate Form
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AIFormBuilder;
