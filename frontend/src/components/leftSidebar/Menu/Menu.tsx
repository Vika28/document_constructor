import React, {FC, useEffect, useState} from 'react';
import styles from './menu.module.css';
import Button from "../../common/button/Button";
import arrowDown from '../../../imgs/arrowDown.svg';
import arrowUp from '../../../imgs/arrowUp.svg';
import { Discipline } from "../../../interfaces/Discipline";
import Store from "../../../store/store";
import {observer} from "mobx-react";
import DisciplineService from "../../../services/DisciplineService";
import Documents from "./Documents/Documents";
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    const [disciplines, setDisciplines] = useState<Discipline[]>([]);
    const [isShowSylabusesList, setIsShowSylabusesList] = useState(false);
    const [selectedDisciplineId, setSelectedDisciplineId] = useState<number>();

    const handleDisciplineClick = (disciplineId: number | undefined) => {
        console.log(disciplineId)
        setSelectedDisciplineId(disciplineId);
        if (disciplineId === selectedDisciplineId) {
            setSelectedDisciplineId(-1);
        }
    }

    const handleBtnCreate = () => {
        navigate('create-discipline')
    }

    useEffect(() => {
        DisciplineService.getDisciplines().then(disciplines => {
            setDisciplines(disciplines);
        });
    }, []);

    return (
        <div className={styles.menuWrapper}>
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
                                    handleDisciplineClick(discipline.id)
                                )
                            }
                            >
                                <span className={styles.disciplineName}>{discipline.name}</span>
                                {
                                    (selectedDisciplineId === discipline.id) ? (
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
                                    (selectedDisciplineId === discipline.id) ? (
                                        <Documents
                                            currentDiscipline={discipline}
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