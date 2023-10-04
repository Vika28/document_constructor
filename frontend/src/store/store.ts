import { makeAutoObservable } from 'mobx';
import { Discipline } from "../interfaces/Discipline";
import { Document } from "../interfaces/Document";

class Store {
    isShown: boolean = false;
    discipline: Discipline | null = null;
    formTitle: string = '';
    formType: string = '';
    document: Document | null = null;
    currentDocument: Document = { id: 0, disciplineId: 0, name: '', type: '', disciplineType: '', content: '' };
    isShownSylabus: boolean = false;
    currentDisciplineId: number = 0;
    showBlock: boolean = false;

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

    setSylabus(document: Document) {
        this.document = document;
    }

    setCurrentDocument(currentDocument: Document) {
        this.currentDocument = currentDocument;
    }

    setIsShownSylabus(isShownSylabus: boolean) {
        this.isShownSylabus = isShownSylabus;
    }

    setCurrentDisciplineId(currentDisciplineId: number) {
        this.currentDisciplineId = currentDisciplineId;
    }
    setShowBlock(showBlock: boolean) {
        this.showBlock = showBlock;
    }

    // setHeaders()
}

export default new Store();
