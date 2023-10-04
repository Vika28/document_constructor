import React, {useState} from "react";
import styles from "./CreateDiscipline.module.css";
import DisciplineService from "../../services/DisciplineService";
import {useNavigate} from "react-router-dom";

export const CreateDiscipline = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleCreate = () => {
        DisciplineService.createDiscipline({name})
            .then((data) => {
                navigate(-1)
            })
            .catch((error) => {
                console.log('Error creating discipline:', error);
            });
    }

    function handleCancel() {
        navigate(-1)
    }

    return (
        <div
            className={styles.formWrapper}
        >
            <h1 className={styles.title}>Основна робоча частина</h1>
            <div className={styles.labelInputWrapper}>
                <p className={styles.label}>Введіть назву нової дисципліни</p>
                <input
                    type="text"
                    className={styles.input}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>

            <div className={styles.btnWrapper}>
                <button
                    disabled={name == null || name === ''}
                    className={styles.btnCreate}
                    onClick={handleCreate}
                >Створити
                </button>
                <button
                    className={styles.btnDecline}
                    onClick={handleCancel}
                >Відмінити
                </button>
            </div>
        </div>
    );
}

export default CreateDiscipline;