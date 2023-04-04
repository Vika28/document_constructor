import React, {FC, useEffect, useState} from 'react';
import styles from './menu.module.css';
import Button from "../../common/button/Button";
import arrowDown from './../../../imgs/arrowDown.svg';
import arrowUp from './../../../imgs/arrowUp.svg';
import { Discipline } from "../../../interfaces/discipline";
import { Sylabus } from "../../../interfaces/sylabus";
import Sylabusy from "./Sylabusy/Sylabusy";
import Store from "../../../store/store";
import {observer} from "mobx-react";

interface MenuProps {
    // onToggleIsShow: (isShow: boolean) => void;
    // discipline: Discipline;
    // formTitle: (formTitle: string) => void;
    // formType: (formType: string) => void;
    // sylabus: Sylabus;
    disciplineId: (disciplineId: number) => void;
    onShowCurrentSylabus: (currentSylabus: { id: number; disciplineId: number; sylabusName: string; type: string; isShowSylabys: boolean }) => void;
}

const Menu: FC<MenuProps> = (props) => {

    const [disciplines, setDisciplines] = useState<Discipline[]>([]);
    const [currentDisciplineId, setCurrentDisciplineId] = useState(0);
    const [isShowSylabusesList, setIsShowSylabusesList] = useState(false);

    const handleDisciplineClick = (disciplineId: number) => {
        let showSylabusState;
        setCurrentDisciplineId(disciplineId);
        showSylabusState = !isShowSylabusesList;
        setIsShowSylabusesList(showSylabusState);
    }

    const handleBtnCreate = () => {
        // props.onToggleIsShow(true);
        Store.setIsShown(true);

        // props.formTitle('Введіть назву нової дисципліни');
        // props.formType('createDiscipline');
        Store.setFormTitle('Введіть назву нової дисципліни');
        Store.setFormType('createDiscipline');
    }

    useEffect(() => {
        // if (props.discipline) {
        if (Store.discipline) {
            const newDisciplinesArr = [...disciplines, Store.discipline];
            setDisciplines(newDisciplinesArr);
            console.log('newDisciplinesArr', newDisciplinesArr);
        }
    }, [Store.discipline]);

    useEffect(() => {
        // if (props.sylabus) {
        if (Store.sylabus) {
            let disciplinesArr = [...disciplines];
            disciplinesArr = disciplinesArr.map((discipline)=>{
                if(discipline.id === currentDisciplineId) {
                    if (Store.sylabus) {
                        discipline.sylabusy.push(Store.sylabus);
                    }
                }
                return discipline
            })
            setDisciplines(disciplinesArr);
        }
    }, [Store.sylabus]);

    return (
        <div className={styles.menuWrapper}>
            <h3 className={styles.menuTitle}>Меню</h3>
            <p className={styles.disciplinesTitle}>Перелік дисциплін:</p>
            <Button
                textContent='Створити нову дисципліну'
                handleClick={ ()=> handleBtnCreate() }
            />
            <ul className={styles.disciplinesMenuWrapper}>
                {
                    disciplines.map((discipline) => (
                        <li className={styles.disciplineItemWrapper}>
                            <div
                                className={styles.disciplineItem}
                                onClick={() => (
                                    handleDisciplineClick(discipline.id))}
                            >
                                <span className={styles.disciplineName}>{discipline.disciplineName}</span>
                                {
                                    (isShowSylabusesList && currentDisciplineId === discipline.id) ? (
                                        <span className={styles.arrowUp}>
                                            <img src={arrowUp} alt=""/>
                                        </span>
                                    ) : (
                                        <span className={styles.arrowDown}>
                                            <img src={arrowDown} alt=""/>
                                        </span>
                                    )
                                }
                            </div>

                                {
                                    (isShowSylabusesList && currentDisciplineId === discipline.id) ? (
                                        <Sylabusy
                                            // onToggleIsShow={props.onToggleIsShow}
                                            currentDiscipline={discipline}
                                            // formTitle={props.formTitle}
                                            // formType={props.formType}
                                            // sylabus={props.sylabus}
                                            disciplineId={props.disciplineId}
                                            disciplineIdForComp={discipline.id}
                                            setCurrentDisciplineId={setCurrentDisciplineId}
                                            onShowCurrentSylabus={props.onShowCurrentSylabus}
                                        />
                                    ) : (
                                        <></>
                                    )
                                }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default observer(Menu);