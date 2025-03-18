import { Field } from "@/types";
import { create } from "zustand"

interface State {
    fields: Field[],
    
    isPending: boolean;
    submitText: string;
    addField: (field: Field) => void;
    removeField: (index: number) => void;
}

export const useStandardFormStore = create<State>((set) => ({
    fields: [
        {
            id: 1,
            answerType: "radio",
            question: "What is your preferred working style?",
            options: [
                { label: "Remote" },
                { label: "On-site" },
                { label: "Hybrid" }
            ],
            required: true
        },
        {
            id: 2,
            answerType: "checkbox",
            question: "Which programming languages are you proficient in?",
            options: [
                { label: "JavaScript" },
                { label: "Python" },
                { label: "C#" },
                { label: "Java" }
            ],
            required: true
        },
        {
            id: 3,
            answerType: "dropdown",
            question: "What is your current job title?",
            options: [
                { label: "Frontend Developer" },
                { label: "Backend Developer" },
                { label: "Fullstack Developer" },
                { label: "DevOps Engineer" }
            ],
            required: true
        },
        {
            id: 4,
            answerType: "input",
            question: "What is your name?",
            options: [] // Empty array because input type doesn't require options
        },
        {
            id: 5,
            answerType: "textarea",
            question: "Tell us about your most challenging project.",
            options: [] // Empty array because textarea doesn't require options
        }
    ],
    isPending: false,
    submitText: "Add Question",
    addField: (field: Field) => set((state) => ({ fields: [...state.fields, field] })),
    removeField: (index: number) => set((state) => ({ fields: state.fields.filter((_, i) => i !== index) })),
}))