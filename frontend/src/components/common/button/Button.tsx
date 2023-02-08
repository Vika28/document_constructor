import React, {FC} from 'react';
import styles from './button.module.css';
import plusImg from './../../../imgs/plus.png';

interface ButtonProps {
    textContent: string;
    handleClick: () => void;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <div className={styles.btnWrapper}>
            <button
                className={styles.btn}
                onClick={props.handleClick}
            >
                <span className={styles.btnContentWrapper}>
                    <span><img src={plusImg} alt="plusImg"/></span>
                    <span>{props.textContent}</span>
                </span>
            </button>
        </div>
    );
}

export default Button;