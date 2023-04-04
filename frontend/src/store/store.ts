import { makeAutoObservable } from 'mobx';
import { Discipline } from "../interfaces/discipline";
import {Sylabus} from "../interfaces/sylabus";

class Store {
    isShown: boolean = false;
    discipline: Discipline | null = null;
    formTitle: string = '';
    formType: string = '';
    sylabus: Sylabus | null = null;
    // disciplineId: number = 0;
    // currentSylabus = { id: 0, disciplineId: 0, sylabusName: '', type: '', isShowSylabys: false };
    currentSylabus: Sylabus = { id: 0, disciplineId: 0, sylabusName: '', type: '' };
    isShownSylabus: boolean = false;
    //
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
    //
    // setDisciplineId(disciplineId: number) {
    //     this.disciplineId = disciplineId;
    // }
    //
    // setCurrentSylabus(currentSylabus: { id: number; disciplineId: number; sylabusName: string; type: string; isShowSylabys: boolean }) {
    //     this.currentSylabus = currentSylabus;
    // }
}

export default new Store();
