import axios from "axios";
import {url} from "../URL";

export  const  createDiscipline: (name: string) => Promise<any> = async (name: string) => {
    const { data } = await axios.post(`${url}/api/disciplines`, {
        name: name,
        documents: [],
    });
    console.log('data', data);
    return data;
}

export  const  createSylabus: (disciplineId: number, sylabusName: string, type: string) => Promise<any> = async (disciplineId: number, sylabusName: string, type: string) => {
    const { data } = await axios.post(`${url}/api/disciplines/${disciplineId}/documents`, {
        sylabusName: sylabusName,
        type: type,
    });
    return data;
}

export  const  getDisciplines: () => Promise<any> = async () => {
    const { data } = await axios.get(`${url}/api/disciplines`);
    console.log(data)
    return data;
}
