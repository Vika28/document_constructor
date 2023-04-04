import React, {FC} from 'react';
import styles from './mainPart.module.css';
import Form from "../formCreate/Form";
import { Discipline } from "../../interfaces/discipline";
import { Sylabus } from "../../interfaces/sylabus";
import SylabusPage from "../SylabysPage/SylabusPage";
import Store from "../../store/store";
import {observer} from "mobx-react";

interface MainPartProps {
    // isShow: boolean;
    // onToggleIsShow: (isShow: boolean) => void;
    onCreateDiscipline: (disciplineName: Discipline) => void;
    formTitle: string;
    formType: string;
    onCreateSylabus: (sylabus: Sylabus) => void;
    disciplineId: number;
    currentSylabus: { id: number; disciplineId: number; sylabusName: string; type: string; isShowSylabys: boolean }
}

const MainPart: FC<MainPartProps> = (props) => {
    return (
        <div className={styles.mainPart}>
            <h2 className={styles.mainPartTittle}>Основна робоча частина</h2>
            {/*{props.isShow ? (*/}
            {Store.isShown ? (
                <Form
                    // onToggleIsShow={props.onToggleIsShow}
                    onCreateDiscipline={props.onCreateDiscipline}
                    formTitle={props.formTitle}
                    formType={props.formType}
                    onCreateSylabus={props.onCreateSylabus}
                    disciplineId={props.disciplineId}
                />
            ) : (
                <></>
            )
            }
            {props.currentSylabus.isShowSylabys && !Store.isShown ? (
                <SylabusPage
                    currentSylabus={props.currentSylabus}
                    disciplineId={props.disciplineId}
                />
            ) : (
                <></>
            )}

        </div>
    );
}

export default observer(MainPart);