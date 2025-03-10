"use client"

import type React from "react"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash } from "lucide-react"
import type { UseFormReturn } from "react-hook-form"
import type { QuestionType } from "./types"

interface FieldOptionsProps {
  questionType: QuestionType
  form: UseFormReturn
  options: string[]
  setOptions: React.Dispatch<React.SetStateAction<string[]>>
}

export const FieldOptions: React.FC<FieldOptionsProps> = ({ questionType, form, options, setOptions }) => {
  // Add option for multiple choice, checkboxes, dropdown
  const addOption = () => {
    const newOptions = [...options, `Option ${options.length + 1}`]
    setOptions(newOptions)
    form.setValue("options", newOptions)
  }

  // Remove option
  const removeOption = (index: number) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index)
      setOptions(newOptions)
      form.setValue("options", newOptions)
    }
  }

  // Options for multiple choice, checkboxes, dropdown
  if (questionType === "multiple-choice" || questionType === "checkboxes" || questionType === "dropdown") {
    return (
      <div className="space-y-4">
        <FormLabel>Options</FormLabel>
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              value={option}
              onChange={(e) => {
                const newOptions = [...options]
                newOptions[index] = e.target.value
                setOptions(newOptions)
                form.setValue("options", newOptions)
              }}
              placeholder={`Option ${index + 1}`}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => removeOption(index)}
              disabled={options.length <= 1}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" size="sm" onClick={addOption} className="mt-2">
          <Plus className="mr-2 h-4 w-4" />
          Add Option
        </Button>
      </div>
    )
  }

  // Settings for linear scale
  if (questionType === "linear-scale") {
    return (
      <div className="space-y-4">
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="minValue"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Min Value</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={10}
                    {...field}
                    value={field.value || 0}
                    onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 0)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxValue"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Max Value</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={10}
                    {...field}
                    value={field.value || 5}
                    onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 5)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="minLabel"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Min Label</FormLabel>
                <FormControl>
                  <Input placeholder="Low" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maxLabel"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Max Label</FormLabel>
                <FormControl>
                  <Input placeholder="High" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    )
  }

  // Required field checkbox (shown for all question types)
  return (
    <FormField
      control={form.control}
      name="required"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Required</FormLabel>
            <FormDescription>Make this question required to answer</FormDescription>
          </div>
        </FormItem>
      )}
    />
  )
}

