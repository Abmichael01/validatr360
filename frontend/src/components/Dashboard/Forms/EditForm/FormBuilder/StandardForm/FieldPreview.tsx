import type React from "react"
import { FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
// Add imports for the type guards at the top of the file
import type { FormValues, QuestionType } from "./types"

interface FieldPreviewProps {
  questionType: QuestionType
  formValues: Partial<FormValues>
  options?: string[]
}

export const FieldPreview: React.FC<FieldPreviewProps> = ({ questionType, formValues, options }) => {
  // Render the appropriate input field based on question type
  switch (questionType) {
    case "short-text":
      return <Input placeholder="Short text answer" disabled />

    case "paragraph":
      return <Textarea placeholder="Long text answer" disabled />

    case "multiple-choice":
      return (
        <RadioGroup defaultValue="option-1">
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={`option-${index + 1}`} id={`option-${index + 1}`} />
              <FormLabel htmlFor={`option-${index + 1}`}>{option}</FormLabel>
            </div>
          ))}
        </RadioGroup>
      )

    case "checkboxes":
      return (
        <div className="space-y-2">
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={`checkbox-${index + 1}`} />
              <FormLabel htmlFor={`checkbox-${index + 1}`}>{option}</FormLabel>
            </div>
          ))}
        </div>
      )

    case "dropdown":
      return (
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => (
              <SelectItem key={index} value={`option-${index + 1}`}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )

    case "file-upload":
      return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input type="file" disabled />
        </div>
      )

    case "linear-scale": {
      // Use type assertion to tell TypeScript about the expected shape
      const linearScaleValues = formValues as Partial<{
        minValue: number
        maxValue: number
        minLabel: string
        maxLabel: string
      }>

      const minValue = typeof linearScaleValues.minValue === "number" ? linearScaleValues.minValue : 1
      const maxValue = typeof linearScaleValues.maxValue === "number" ? linearScaleValues.maxValue : 5
      const minLabel = linearScaleValues.minLabel || "Low"
      const maxLabel = linearScaleValues.maxLabel || "High"

      return (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm">{minLabel}</span>
            <span className="text-sm">{maxLabel}</span>
          </div>
          <Slider
            defaultValue={[Math.floor((minValue + maxValue) / 2)]}
            max={maxValue}
            min={minValue}
            step={1}
            disabled
          />
        </div>
      )
    }

    case "date": {
      // Use type assertion for date values
      const dateValues = formValues as Partial<{
        date: Date
      }>

      return (
        <div className="grid gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dateValues.date && "text-muted-foreground",
                )}
                disabled
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateValues.date ? format(dateValues.date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" initialFocus disabled />
            </PopoverContent>
          </Popover>
        </div>
      )
    }

    case "time":
      return <Input type="time" disabled />

    default:
      return <Input placeholder="Answer" disabled />
  }
}

