"use client"

import React from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Trash2 } from "lucide-react"
import { useStandardFormStore } from "@/stores/standardFormStore"
import { Field } from "@/types"
import { useFormField } from "@/hooks/useFormField"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  answerType: z.string(),
  question: z.string().min(2, "Question must be at least 2 characters."),
  required: z.boolean().default(false),
  options: z
    .array(
      z.object({
        label: z.string().min(1, "Option cannot be empty"),
      })
    )
    .min(1, "At least one option is required"),
})

type SelectFieldFormData = z.infer<typeof formSchema>

interface SelectTypeProps {
  answerType: string;
  field?: Field;
}

const SelectType: React.FC<SelectTypeProps> = ({ answerType, field }) => {
  const form = useForm<SelectFieldFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answerType: answerType,
      question: field?.question || "",
      required: field?.required || false, // Default required field
      options: field?.options || [{ label: "" }],
    },
  })
  const { submitText } = useStandardFormStore()
  const { add } = useFormField()

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "options",
  })

  function onSubmit(values: SelectFieldFormData) {
    console.log("Select Field Data:", values)
    add(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Question Field */}
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input placeholder="Type your question here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Required Checkbox */}
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
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

        {/* Dynamic Options */}
        <div className="space-y-4">
          <FormLabel>Options</FormLabel>
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`options.${index}.label`}
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Input placeholder={`Option ${index + 1}`} {...field} />
                  </FormControl>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Add Option Button */}
          <Button
            type="button"
            onClick={() => append({ label: "" })}
            variant="outline"
          >
            Add Option
          </Button>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-fit float-right">
          {submitText}
        </Button>
      </form>
    </Form>
  )
}

export default SelectType
