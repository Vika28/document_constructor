import React, {FC, useState} from 'react';
import styles from './Form.module.css';
import { Discipline } from "../../interfaces/discipline";
import { Sylabus } from "../../interfaces/sylabus";
import { RSOtype1 } from "../../RSOtypes";
import { RSOtype2 } from "../../RSOtypes";
import {createDiscipline, createSylabus} from "../../services/APIservice";
import Store from "../../store/store";
import { observer } from "mobx-react";

interface FormProps {
    // onToggleIsShow: (isShow: boolean) => void;
    onCreateDiscipline: (discipline: Discipline) => void;
    formTitle: string;
    formType: string;
    onCreateSylabus: (sylabus: Sylabus) => void;
    disciplineId: number;
}

const Form: FC<FormProps>= (props) => {
    const [inputValue, setInputValue] = useState('');
    const [RSOtype, setRSOtype] = useState('');
    const isDisabledBtnCreate = inputValue === '' || RSOtype === '' && props.formType === 'createSylabus';


    const handleCreate = () => {
        if(props.formType === 'createDiscipline') {
            createDiscipline(inputValue)
                .then((discipline) => {
                    props.onCreateDiscipline(
                        {
                            id: discipline.id,
                            disciplineName: discipline.name,
                            sylabusy: []
                        }
                        );
                })
                .catch((error) => {
                    console.log('Error creating discipline:', error);
                });
        } else if (props.formType === 'createSylabus') {
            createSylabus(props.disciplineId, inputValue, RSOtype)
                .then((sylabus) => {
                    props.onCreateSylabus(
                        {
                            id: sylabus.id,
                            disciplineId: sylabus.disciplineId,
                            sylabusName: sylabus.sylabusName,
                            type: sylabus.type,
                        }
                    );
                })
                .catch((error) => {
                    console.log('Error creating sylabus:', error);
                });

            // todo
        }
        // props.onToggleIsShow(false);
        Store.setIsShown(false);
    }


    return (
        <div
            className={styles.formWrapper}
        >
            <div className={styles.labelInputWrapper}>
                <p className={styles.label}>{props.formTitle}</p>
                <input
                    type="text"
                    className={styles.input}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
            </div>
            {
                props.formTitle === 'Введіть назву нового силабусу' ? (
                    <div className={styles.typeRSOWrapper}>
                        <div
                            className={`${styles.typeRSO} ${RSOtype === RSOtype1 ? styles.activeTypeRSO : ''}`}
                            onClick={() => {
                                setRSOtype(RSOtype1);
                            }}
                        >{RSOtype1}</div>
                        <div
                            className={`${styles.typeRSO} ${RSOtype === RSOtype2 ? styles.activeTypeRSO : ''}`}
                            onClick={() => setRSOtype(RSOtype2)}
                        >{RSOtype2}</div>
                    </div>
                ) : (
                    <></>
                )
            }

            <div className={styles.btnWrapper}>
                <button
                    disabled={isDisabledBtnCreate}
                    className={styles.btnCreate}
                    onClick={handleCreate}
                >Створити</button>
                <button
                    className={styles.btnDecline}
                    onClick={() => Store.setIsShown(false)}
                >Відмінити</button>
            </div>
        </div>
    );
}

export default observer(Form);