import React, {FC, useState} from 'react';
import styles from './App.module.css';
import LeftSidebar from "./components/leftSidebar/leftSidebar";
import MainPart from "./components/mainPart/MainPart";
import RightSidebar from "./components/rigthSidebar/RightSidebar";
import { Discipline } from './interfaces/discipline';
import { Sylabus } from "./interfaces/sylabus";

interface AppProps {

}

const App: FC<AppProps> = (props) => {
    const [isShow, setIsShow] = useState(false);
    // @ts-ignore
    const [discipline, setDiscipline] = useState<Discipline>(null);
    const [formTitle, setFormTitle] = useState('');
    const [formType, setFormType] = useState('');
    // @ts-ignore
    const [sylabus, setSylabus] = useState<Sylabus>(null);
    const [disciplineId, setDisciplineId] = useState(0);
    const [currentSylabus, setCurrentSylabus] = useState({ id: 0, sylabusName: '', type: '', isShowSylabys: false } );
    const toggleIsShow = (isShow: boolean) => {
        console.log('callback', isShow);
        setIsShow(isShow);
    }

    const createDiscipline = (discipline: Discipline) => {
        setDiscipline(discipline);
    }

    const getFormTitle = (formTitle: string) => {
        setFormTitle(formTitle);
    }

    const getFormType = (formType: string) => {
        setFormType(formType);
    }

    const createSylabus = (sylabus: Sylabus) => {
        // @ts-ignore
        setSylabus(sylabus);
    }

    const getDisciplineId = (disciplineId: number) => {
        setDisciplineId(disciplineId);
    }

    const getCurrentSylabus = (currentSylabus: { id: number; sylabusName: string; type: string; isShowSylabys: boolean }) => {
        // @ts-ignore
        setCurrentSylabus(currentSylabus);
    }


    return (
      <div className={styles.appWrapper}>
          <h1 className={styles.pageTitle}>Конструктор документів</h1>
          <div className={styles.app}>
              <LeftSidebar
                  onToggleIsShow={toggleIsShow}
                  discipline={discipline}
                  formTitle={getFormTitle}
                  formType={getFormType}
                  sylabus={sylabus}
                  disciplineId={getDisciplineId}
                  onShowCurrentSylabus={getCurrentSylabus}
              />
              <MainPart
                  isShow={isShow}
                  onToggleIsShow={toggleIsShow}
                  onCreateDiscipline={createDiscipline}
                  formTitle={formTitle}
                  formType={formType}
                  onCreateSylabus={createSylabus}
                  disciplineId={disciplineId}
                  currentSylabus={currentSylabus}
              />
              <RightSidebar />
          </div>
      </div>

  );
}

export default App;
