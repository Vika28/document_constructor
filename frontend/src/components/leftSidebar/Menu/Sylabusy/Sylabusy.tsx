import React, {FC, useState} from 'react';
import styles from "./sylabusy.module.css";
import Button from "../../../common/button/Button";
import {Discipline} from "../../../../interfaces/discipline";
import {Sylabus} from "../../../../interfaces/sylabus";


interface SylabusyProps {
    onToggleIsShow: (isShow: boolean) => void;
    currentDiscipline: Discipline;
    formTitle: (formTitle: string) => void;
    formType: (formType: string) => void;
    sylabus: Sylabus;
    disciplineId: (disciplineId: number) => void;
    disciplineIdForComp: number;
    setCurrentDisciplineId: (disciplineId: number) => void;
    onShowCurrentSylabus: (currentSylabus: { id: number; sylabusName: string; type: string; isShowSylabys: boolean }) => void;
}

const Sylabusy: FC<SylabusyProps> = (props) => {

    const [clickedSylabusId, setClickedSylabusId] = useState(0);

    const handleSylabusClick = (sylabus: Sylabus) => {
        let tempId = 0;
        tempId = sylabus.id;
        setClickedSylabusId(tempId);
        props.onShowCurrentSylabus(
            { id: sylabus.id,
                            sylabusName: sylabus.sylabusName,
                            type: sylabus.type,
                            isShowSylabys: true
            }
        );
    }

    const handleBtnCreateClick = () => {
        props.onToggleIsShow(true);
        props.formTitle('Введіть назву нового силабусу');
        props.formType('createSylabus');
        props.disciplineId(props.disciplineIdForComp);
        props.setCurrentDisciplineId(props.disciplineIdForComp)
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
                    props.currentDiscipline.sylabusy.map((sylabus, index) => (
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

export default Sylabusy;