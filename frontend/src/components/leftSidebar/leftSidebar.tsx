import React, {FC, useState} from 'react';
import styles from './leftsidebar.module.css';
import Menu from "./Menu/Menu";
import { Discipline } from "../../interfaces/discipline";
import { Sylabus } from "../../interfaces/sylabus";
import {observer} from "mobx-react";

interface LeftSidebarProps {
    // onToggleIsShow: (isShow: boolean) => void;
    // discipline: Discipline;
    // formTitle: (formTitle: string) => void;
    // formType: (formType: string) => void;
    // sylabus: Sylabus;
    disciplineId: (disciplineId: number) => void;
    // onShowCurrentSylabus: (currentSylabus: { id: number; disciplineId: number; sylabusName: string; type: string; isShowSylabys: boolean }) => void;
}

const LeftSidebar: FC<LeftSidebarProps> = (props) => {
    // todo function getTeacher(useEffect?)

    const [teacher, setTeacher] = useState(['Ivanov I']);


    return (
        <div className={styles.leftSidebarWrapper}>
            <p className={styles.leftSidebarTitle}>Перелік дисциплін {teacher}</p>
            <Menu
                // onToggleIsShow={props.onToggleIsShow}
                // discipline={props.discipline}
                // formTitle={props.formTitle}
                // formType={props.formType}
                // sylabus={props.sylabus}
                disciplineId={props.disciplineId}
                // onShowCurrentSylabus={props.onShowCurrentSylabus}
             />
        </div>
    );
}

export default observer(LeftSidebar);