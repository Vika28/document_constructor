import React, {FC} from 'react';
import styles from './Form.module.css';
import axios from "axios";

interface FormProps {
    // isShow: boolean;
    onToggleIsShow: (isShow: boolean) => void;
}

const Form: FC<FormProps>= (props) => {
    // console.log('props in Form', props.isShow);
    // handleClick(props.isShow)

    const handleCreate = () => {
        console.log('axios works')
        axios.post('http://localhost:8080/createDiscipline', {
            id: 1,
            disciplineName: "disc 1"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        props.onToggleIsShow(false);
    }
    return (
        <div className={styles.formWrapper}>
            <div className={styles.labelInputWrapper}>
                <p className={styles.label}>Введіть назву нової дисципліни</p>
                <input type="text" className={styles.input}/>
            </div>
            <div className={styles.btnWrapper}>
                <button
                    className={styles.btnCreate}
                    onClick={handleCreate}
                >Створити</button>
                <button
                    className={styles.btnDecline}
                    onClick={() => props.onToggleIsShow(false)}
                >Відмінити</button>
            </div>
        </div>
    );
}

export default Form;