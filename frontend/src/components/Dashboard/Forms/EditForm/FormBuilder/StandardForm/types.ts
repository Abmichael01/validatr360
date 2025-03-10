import { z } from "zod";

// Define question types
export const questionTypes = [
  { value: "short-text", label: "Short Text" },
  { value: "paragraph", label: "Paragraph" },
  { value: "multiple-choice", label: "Multiple Choice" },
  { value: "checkboxes", label: "Checkboxes" },
  { value: "dropdown", label: "Dropdown" },
  { value: "file-upload", label: "File Upload" },
  { value: "linear-scale", label: "Linear Scale" },
  { value: "date", label: "Date" },
  { value: "time", label: "Time" },
] as const;

export type QuestionType = (typeof questionTypes)[number]["value"];

// Base form schema
export const baseFormSchema = z.object({
  question: z.string().min(2, {
    message: "Question must be at least 2 characters.",
  }),
  description: z.string().optional(),
  required: z.boolean().default(false),
  type: z.enum([
    "short-text", 
    "paragraph", 
    "multiple-choice", 
    "checkboxes", 
    "dropdown", 
    "file-upload", 
    "linear-scale", 
    "date", 
    "time"
  ]),
});

// Extended schema for multiple choice, checkboxes, and dropdown
export const optionsSchema = baseFormSchema.extend({
  options: z.array(z.string()).min(1, {
    message: "You must add at least one option.",
  }),
});

// Extended schema for linear scale
export const linearScaleSchema = baseFormSchema.extend({
  minValue: z.number().min(0).max(10),
  maxValue: z.number().min(0).max(10),
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
});

// Extended schema for date
export const dateSchema = baseFormSchema.extend({
  date: z.date().optional(),
});

// Extended schema for time
export const timeSchema = baseFormSchema.extend({
  time: z.string().optional(),
});

// Union type for all form schemas
export const formSchema = z.discriminatedUnion("type", [
  optionsSchema.extend({ type: z.literal("multiple-choice") }),
  optionsSchema.extend({ type: z.literal("checkboxes") }),
  optionsSchema.extend({ type: z.literal("dropdown") }),
  linearScaleSchema.extend({ type: z.literal("linear-scale") }),
  dateSchema.extend({ type: z.literal("date") }),
  timeSchema.extend({ type: z.literal("time") }),
  baseFormSchema.extend({ type: z.literal("short-text") }),
  baseFormSchema.extend({ type: z.literal("paragraph") }),
  baseFormSchema.extend({ type: z.literal("file-upload") }),
]);

export type FormValues = z.infer<typeof formSchema>;

// Helper type for default values
export type DefaultFormValues = {
  question: string;
  description: string;
  required: boolean;
  type: QuestionType;
  options?: string[];
  minValue?: number;
  maxValue?: number;
  minLabel?: string;
  maxLabel?: string;
  date?: Date;
  time?: string;
};
