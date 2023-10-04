import React, {FC, useState} from 'react';
import styles from "./sylabusy.module.css";
import Button from "../../../common/button/Button";
import {Discipline} from "../../../../interfaces/discipline";
import {Sylabus} from "../../../../interfaces/sylabus";
import Store from "../../../../store/store";
import { observer } from "mobx-react";


interface SylabusyProps {
    currentDiscipline: Discipline;
}

const Sylabusy: FC<SylabusyProps> = (props) => {

    const [clickedSylabusId, setClickedSylabusId] = useState<null | number>(null);

    const handleSylabusClick = (sylabus: Sylabus) => {
        let tempId = 0;
        tempId = sylabus.id;
        setClickedSylabusId(tempId);
        Store.setCurrentSylabus({
            id: sylabus.id,
            disciplineId: sylabus.disciplineId,
            sylabusName: sylabus.sylabusName,
            type: sylabus.type,
        });
        Store.setIsShownSylabus(true);
    }

    const handleBtnCreateClick = () => {
        console.log('створення силабусу')
        Store.setIsShown(true);
        Store.setFormTitle('Введіть назву нового силабусу');
        Store.setFormType('createSylabus');
        setClickedSylabusId(null);
        Store.setCurrentSylabus({
            id: 0,
            disciplineId: 0,
            sylabusName: '',
            type: '',
        });
        Store.setIsShownSylabus(false);
    }

    return (
        <div>
            <div className={styles.btnWrapper}>
                <Button
                    textContent='Створити новий силабус'
                    handleClick={()=> handleBtnCreateClick()}
                />
            </div>
            <div
                className={styles.sylabusesWrapper}
            >
                {
                    props.currentDiscipline.documents.map((sylabus, index) => (
                        <div
                            className={`${styles.sylabusWrapper}
                                        ${clickedSylabusId === sylabus.id ? styles.active : ''}`}
                            onClick={() => handleSylabusClick(sylabus)}
                        >
                            {sylabus.sylabusName}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default observer(Sylabusy);