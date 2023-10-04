export interface Document {
    id?: number;
    disciplineId: number;
    name: string;
    type: string;
    disciplineType: string;
    content?: string | undefined,
}