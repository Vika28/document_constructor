import React, {FC, useState} from 'react';
import styles from './Form.module.css';
import {disciplineType1,disciplineType2, RSOtype1} from "../../RSOtypes";
import { RSOtype2 } from "../../RSOtypes";
import DisciplineService from "../../services/DisciplineService";
import Store from "../../store/store";
import { observer } from "mobx-react";
import DocumentService from "../../services/DocumentService";
import {Discipline} from "../../interfaces/Discipline";

const Form= () => {
    const [inputValue, setInputValue] = useState('');
    const [type, setType] = useState('');
    const [disciplineType, setDisciplineType] = useState('');
    const isDisabledBtnCreate = inputValue === '' || type === '' && Store.formType === 'createSylabus';

    const handleBtnTypeClick = (value: string) => {
        setType(value);
    }

    const handleBtnDisciplineTypeClick = (value: string) => {
        setDisciplineType(value);
    }

    const handleCreate = () => {
        if(Store.formType === 'createDiscipline') {
            // console.log('inputValue', inputValue);
            // DisciplineService.createDiscipline()
            //     .then((create-discipline) => {
            //         Store.setDiscipline(
            //             {
            //                 id: create-discipline.id,
            //                 name: create-discipline.name,
            //                 documents: []
            //             }
            //             );
            //     })
            //     .catch((error) => {
            //         console.log('Error creating create-discipline:', error);
            //     });
        } else if (Store.formType === 'createSylabus') {
            // DocumentService.createDocument(Store.currentDisciplineId, inputValue, type, disciplineType)
            //     .then((document) => {
            //             Store.setSylabus(
            //             {
            //                 id: document.id,
            //                 disciplineId: document.disciplineId,
            //                 name: document.name,
            //                 type: document.type,
            //                 disciplineType: document.disciplineType,
            //                 content: document.content,
            //             }
            //         );
            //     })
            //     .catch((error) => {
            //         console.log('Error creating sylabus:', error);
            //     });
        }
        Store.setIsShown(false);
    }

    return (
        <div
            className={styles.formWrapper}
        >
            <h1 className={styles.title}>Основна робоча частина</h1>
            <div className={styles.labelInputWrapper}>
                <p className={styles.label}>{Store.formTitle}</p>
                <input
                    type="text"
                    className={styles.input}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
            </div>
            {
                Store.formType === 'createSylabus' ? (
                    <div className={styles.sylabusBtnsWrapper}>
                        <p className={styles.text}>Тип РСО:</p>
                        <div className={styles.typeRSOWrapper}>
                            <div
                                className={`${styles.typeRSO} ${type === 'PCO1' ? styles.activeTypeRSO : ''}`}
                                onClick={() => {
                                    handleBtnTypeClick('PCO1');
                                }}
                            >{RSOtype1}</div>
                            <div
                                className={`${styles.typeRSO} ${type === 'PCO2' ? styles.activeTypeRSO : ''}`}
                                onClick={() => handleBtnTypeClick('PCO2')}
                            >{RSOtype2}</div>
                        </div>
                        <p className={styles.text}>Тип дисципліни:</p>

                        <div className={styles.typeRSOWrapper}>
                            <div
                                className={`${styles.typeRSO} ${disciplineType === 'NORMATIVE' ? styles.activeTypeRSO : ''}`}
                                onClick={() => {
                                    handleBtnDisciplineTypeClick('NORMATIVE');
                                }}
                            >{disciplineType1}</div>
                            <div
                                className={`${styles.typeRSO} ${disciplineType === 'SELECTIVE' ? styles.activeTypeRSO : ''}`}
                                onClick={() => {
                                    handleBtnDisciplineTypeClick('SELECTIVE')
                                }}
                            >{disciplineType2}</div>
                        </div>
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