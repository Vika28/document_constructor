import {Sylabus} from "./sylabus";
export interface Discipline {
    id: number;
    disciplineName: string;
    sylabusy: Sylabus[];
}