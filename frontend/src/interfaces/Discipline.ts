import {Document} from "./Document";
export interface Discipline {
    id?: number;
    name: string;
    documents?: Document[];
}