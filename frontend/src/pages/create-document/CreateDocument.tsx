import React, {useState} from "react";
import Store from "../../store/store";
import styles from "../../components/formCreate/Form.module.css";
import {disciplineType1, disciplineType2, RSOtype1, RSOtype2} from "../../RSOtypes";
import {observer} from "mobx-react";
import DocumentService from "../../services/DocumentService";
import {useNavigate, useParams} from "react-router-dom";
import {isNumberObject} from "util/types";

export const CreateDocument = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [disciplineType, setDisciplineType] = useState('');
    const isDisabledBtnCreate = name === '' || type === '' && Store.formType === 'createSylabus';
    const {disciplineIdParam} = useParams();;
    const navigate = useNavigate()

    const validateForm = () => {
        return name !== '' && name !== null;
    }

    const handleBtnTypeClick = (value: string) => {
        setType(value);
    }

    const handleBtnDisciplineTypeClick = (value: string) => {
        setDisciplineType(value);
    }

    const handleCreate = () => {
        console.log(disciplineIdParam)
        if (!disciplineIdParam) {
            return
        }
        const disciplineId = parseInt(disciplineIdParam);


        DocumentService.createDocument({disciplineId, name, type, disciplineType})
            .then((document) => {
                navigate(`/dashboard/document/${document.id}`, {replace: true})
            })
            .catch((error) => {
                console.log('Error creating sylabus:', error);
            });
    }


    return (
        <div
            className={styles.formWrapper}
        >
            <h1 className={styles.title}>Основна робоча частина</h1>
            <div className={styles.labelInputWrapper}>
                <p className={styles.label}>Введіть назву нового силабусу</p>
                <input
                    type="text"
                    className={styles.input}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            {
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
            }

            <div className={styles.btnWrapper}>
                <button
                    disabled={isDisabledBtnCreate}
                    className={styles.btnCreate}
                    onClick={handleCreate}
                >Створити
                </button>
                <button
                    className={styles.btnDecline}
                    onClick={() => Store.setIsShown(false)}
                >Відмінити
                </button>
            </div>
        </div>
    );
}
