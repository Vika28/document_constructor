import {Sylabus} from "./sylabus";
export interface Discipline {
    id: number;
    name: string;
    documents: Sylabus[];
}