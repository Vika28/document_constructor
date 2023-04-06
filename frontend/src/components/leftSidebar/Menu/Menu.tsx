import React, {FC, useEffect, useState} from 'react';
import styles from './menu.module.css';
import Button from "../../common/button/Button";
import arrowDown from './../../../imgs/arrowDown.svg';
import arrowUp from './../../../imgs/arrowUp.svg';
import Sylabusy from "./Sylabusy/Sylabusy";
import Store from "../../../store/store";
import {observer} from "mobx-react";

interface MenuProps {
}

const Menu: FC<MenuProps> = (props) => {

    const [isShowSylabusesList, setIsShowSylabusesList] = useState(false);

    const handleDisciplineClick = (disciplineId: number) => {
        let showSylabusState;
        Store.setCurrentDisciplineId(disciplineId)
        showSylabusState = !isShowSylabusesList;
        setIsShowSylabusesList(showSylabusState);
    }

    const handleBtnCreate = () => {
        Store.setIsShown(true);
        Store.setFormTitle('Введіть назву нової дисципліни');
        Store.setFormType('createDiscipline');
    }

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
                    Store.disciplines.map((discipline) => (
                        <li className={styles.disciplineItemWrapper}>
                            <div
                                className={styles.disciplineItem}
                                onClick={() => (
                                    handleDisciplineClick(discipline.id))}
                            >
                                <span className={styles.disciplineName}>{discipline.name}</span>
                                {
                                    (isShowSylabusesList && Store.currentDisciplineId === discipline.id) ? (
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
                                    (isShowSylabusesList && Store.currentDisciplineId === discipline.id) ? (
                                        <Sylabusy
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