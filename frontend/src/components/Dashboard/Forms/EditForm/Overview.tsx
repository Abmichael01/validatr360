import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "react-router-dom";
import FormTypeSelect from "./FormTypeSelect";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  leadsTag: z.string().min(2, { message: "tag must be at least 2 characters." }),
});

export const Overview: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Summer Sales",
      leadsTag: "Summer Leads"
    },
  });

  const [ params ] = useSearchParams()
  const method = params.get("method")

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex gap-10">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Form Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription>The form name goes here</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="leadsTag"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leads Tag</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormDescription> Give the Leads generated through this form a tag name or leave blank</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Card>
              <CardHeader>
                <CardTitle>Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border rounded-xl relative h-[300px] flex items-center justify-center bg-gray-100">
                  <Badge className="absolute top-2 left-2 bg-gray-600">Form preview</Badge>
                  <p className="text-foreground/40">You haven't built any form</p>
                </div>
                <div>
                  {method === "1" && <FormTypeSelect method={method}>
                    <Button type="button">Start Building from Scratch</Button>
                  </FormTypeSelect> }
                  {method === "3" && <FormTypeSelect method={method}>
                    <Button type="button">Start Building with AI</Button>
                  </FormTypeSelect> }
                  {method === "2" && 
                    <Button type="button">Browse Templates</Button> }
                </div>
              </CardContent>
            </Card>

            <Button type="submit" className="float-right">Save Changes</Button>
          </form>
        </Form>
      </div>
      <div className="w-[40%] border-l h-[450px] shrink-0 hidden lg:flex"></div>
    </div>
  );
};
