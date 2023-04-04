import { makeAutoObservable } from 'mobx';
import { Discipline } from "../interfaces/discipline";
import { Sylabus } from "../interfaces/sylabus";

class Store {
    isShown: boolean = false;
    discipline: Discipline | null = null;
    formTitle: string = '';
    formType: string = '';
    sylabus: Sylabus | null = null;
    currentSylabus: Sylabus = { id: 0, disciplineId: 0, sylabusName: '', type: '' };
    isShownSylabus: boolean = false;
    currentDisciplineId: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setIsShown(isShown: boolean) {
        this.isShown = isShown;
    }

    setDiscipline(discipline: Discipline) {
        this.discipline = discipline;
    }

    setFormTitle(formTitle: string) {
        this.formTitle = formTitle;
    }

    setFormType(formType: string) {
        this.formType = formType;
    }

    setSylabus(sylabus: Sylabus) {
        this.sylabus = sylabus;
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
