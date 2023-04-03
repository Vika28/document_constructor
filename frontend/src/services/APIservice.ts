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

export  const  createSylabus: (sylabusName: string, type: string) => Promise<any> = async (sylabusName: string, type: string) => {
    const { data } = await axios.post(`${url}/createSylabus`, {
        sylabusName: sylabusName,
        type: type,
    });
    return data;
}
