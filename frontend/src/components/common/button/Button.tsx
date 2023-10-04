import React, {FC} from 'react';
import styles from './button.module.css';

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
                {props.textContent}
            </button>
        </div>
    );
}

export default Button;