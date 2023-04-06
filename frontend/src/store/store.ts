import { makeAutoObservable } from 'mobx';
import { Discipline } from "../interfaces/discipline";
import { Sylabus } from "../interfaces/sylabus";

class Store {
    isShown: boolean = false;
    disciplines: Discipline[] = [];
    formTitle: string = '';
    formType: string = '';
    currentSylabus: Sylabus = { id: 0, disciplineId: 0, sylabusName: '', type: '' };
    isShownSylabus: boolean = false;
    currentDisciplineId: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setIsShown(isShown: boolean) {
        this.isShown = isShown;
    }

    setDisciplines(disciplines: Discipline[]) {
        this.disciplines = disciplines;
    }

    setFormTitle(formTitle: string) {
        this.formTitle = formTitle;
    }

    setFormType(formType: string) {
        this.formType = formType;
    }

    setCurrentSylabus(currentSylabus: Sylabus) {
        this.currentSylabus = currentSylabus;
    }

    setIsShownSylabus(isShownSylabus: boolean) {
        this.isShownSylabus = isShownSylabus;
    }

    setCurrentDisciplineId(currentDisciplineId: number) {
        this.currentDisciplineId = currentDisciplineId;
    }
}

export default new Store();
