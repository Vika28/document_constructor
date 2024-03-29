import React, {FC, useState} from 'react';
import styles from './Form.module.css';
import { RSOtype1 } from "../../RSOtypes";
import { RSOtype2 } from "../../RSOtypes";
import {createDiscipline, createSylabus, getAllDisciplines} from "../../services/APIservice";
import Store from "../../store/store";
import { observer } from "mobx-react";

interface FormProps {

}

const Form: FC<FormProps>= (props) => {
    const [inputValue, setInputValue] = useState('');
    const [RSOtype, setRSOtype] = useState('');
    const isDisabledBtnCreate = inputValue === '' || RSOtype === '' && Store.formType === 'createSylabus';


    const handleCreate = async () => {
        if(Store.formType === 'createDiscipline') {
            createDiscipline(inputValue)
                .then((disciplines) => {
                    Store.setDisciplines(disciplines);
                })
                .catch((error) => {
                    console.log('Error creating discipline:', error);
                });
        } else if (Store.formType === 'createSylabus') {
            await createSylabus(inputValue, RSOtype, Store.currentDisciplineId);
            getAllDisciplines()
                .then((disciplines) => {
                    Store.setDisciplines(disciplines);
                })
                .catch((error) => {
                    console.log('Error creating sylabus:', error);
                });
        }
        Store.setIsShown(false);
    }

    return (
        <div
            className={styles.formWrapper}
        >
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