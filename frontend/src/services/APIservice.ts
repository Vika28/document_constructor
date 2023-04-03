import axios from "axios";
import {url} from "../URL";

export  const  createDiscipline: (disciplineName: string) => Promise<any> = async (disciplineName: string) => {
    const { data } = await axios.post(`${url}/createDiscipline`, {
        id: 1,
        disciplineName: disciplineName,
        sylabusy: [],
    });
     return data;
}

export  const  createSylabus: (disciplineId: number, sylabusName: string, type: string) => Promise<any> = async (disciplineId: number, sylabusName: string, type: string) => {
    const { data } = await axios.post(`${url}/createSylabus`, {
        disciplineId: disciplineId,
        sylabusName: sylabusName,
        type: type,
    });
    return data;
}
