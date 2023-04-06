import axios from "axios";
import {url} from "../URL";
import {Discipline} from "../interfaces/discipline";

export  const  createDiscipline: (disciplineName: string) => Promise<any> = async (disciplineName: string) => {
    const { data } = await axios.post(`${url}/createDiscipline`, {
        id: 1,
        name: disciplineName,
        sylabusy: [],
    });
     return data;
}

export  const  createSylabus: (sylabusName: string, type: string, disciplineId: number) => Promise<any> = async (sylabusName: string, type: string,disciplineId: number) => {
    await axios.post(`${url}/createSylabus?disciplineId=${disciplineId}`, {
        sylabusName: sylabusName,
        type: type,
    });
}

export const getAllDisciplines: () => Promise<any> = async () => {
    const { data } = await axios.get(`${url}/disciplines`);
    return data;
}
