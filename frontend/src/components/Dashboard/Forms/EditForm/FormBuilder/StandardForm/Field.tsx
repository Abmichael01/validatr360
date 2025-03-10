"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FieldPreview } from "./FieldPreview"
import { FieldOptions } from "./FieldOptions"
import { type FormValues, formSchema, questionTypes, type QuestionType, type DefaultFormValues } from "./types"

interface FieldProps {
  onSave?: (values: FormValues) => void
  initialValues?: Partial<DefaultFormValues>
  id?: number
}

const Field: React.FC<FieldProps> = ({ onSave, initialValues, id }) => {
  const [questionType, setQuestionType] = useState<QuestionType>("short-text")
  const [options, setOptions] = useState<string[]>(["Option 1"])
  const [activeTab, setActiveTab] = useState<string>("edit")

  // Create default values based on question type
  const getDefaultValues = () => {
    const baseDefaults = {
      question: initialValues?.question || "",
      description: initialValues?.description || "",
      required: initialValues?.required || false,
      type: initialValues?.type || "short-text",
    }

    // Add type-specific defaults
    switch (initialValues?.type) {
      case "multiple-choice":
      case "checkboxes":
      case "dropdown":
        return {
          ...baseDefaults,
          options: initialValues?.options || ["Option 1"],
        }
      case "linear-scale":
        return {
          ...baseDefaults,
          minValue: initialValues?.minValue || 1,
          maxValue: initialValues?.maxValue || 5,
          minLabel: initialValues?.minLabel || "Low",
          maxLabel: initialValues?.maxLabel || "High",
        }
      case "date":
        return {
          ...baseDefaults,
          date: initialValues?.date || undefined,
        }
      case "time":
        return {
          ...baseDefaults,
          time: initialValues?.time || "",
        }
      default:
        return baseDefaults
    }
  }

  const form = useForm<typeof formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(),
  })

  // Update questionType when initialValues change
  useEffect(() => {
    if (initialValues?.type) {
      setQuestionType(initialValues.type)
    }
    if (initialValues?.options) {
      setOptions(initialValues.options)
    }
  }, [initialValues])

  // Handle question type change
  const handleTypeChange = (value: QuestionType) => {
    setQuestionType(value)
    form.setValue("type", value)

    // Reset type-specific fields when changing type
    if (value === "multiple-choice" || value === "checkboxes" || value === "dropdown") {
      if (!form.getValues("options")) {
        form.setValue("options", ["Option 1"])
        setOptions(["Option 1"])
      }
    } else if (value === "linear-scale") {
      form.setValue("minValue", 1)
      form.setValue("maxValue", 5)
      form.setValue("minLabel", "Low")
      form.setValue("maxLabel", "High")
    }
  }

  // Define a submit handler
  function onSubmit(values: FormValues) {
    console.log("Field saved:", values)
    if (onSave) {
      onSave(values)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question {id}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question Type</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value)
                          handleTypeChange(value as QuestionType)
                        }}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a question type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {questionTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your question" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Add a description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Type-specific options */}
                <FieldOptions questionType={questionType} form={form} options={options} setOptions={setOptions} />

                <Button type="submit">Save Question</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="preview">
            <div className="space-y-4 p-4 border rounded-md">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">
                  {form.watch("question") || "Question Preview"}
                  {form.watch("required") && <span className="text-red-500 ml-1">*</span>}
                </h3>
                {form.watch("description") && (
                  <p className="text-sm text-muted-foreground">{form.watch("description")}</p>
                )}
              </div>
              <FieldPreview questionType={questionType} formValues={form.getValues()} options={options} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export default Field

