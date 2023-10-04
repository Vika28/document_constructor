import api from './index'
import {Discipline} from "../interfaces/Discipline";

class DisciplineService {

    static async createDiscipline (discipline: Discipline) : Promise<Discipline> {
        return api
            .post(`/api/disciplines`, discipline)
            .then((response) => response.data)
    }

    static async getDisciplines () : Promise<Discipline[]> {
        return api
            .get(`/api/disciplines`)
            .then((response) => response.data)
    }
}

export default DisciplineService;