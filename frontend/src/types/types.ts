export type Funnel = {
	name: string;
    createMethod: number;
    leadsName: string;
}

export type Field = {
    id?: number;
    answerType: string;
    question: string;
    options?: {
        label: string;
    }[];
    required?: boolean;
}