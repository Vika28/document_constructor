import React, {FC} from 'react';
import styles from './buttonApprove.module.css';

interface ButtonApproveProps {
    textContent: string;
    handleClick?: () => void;
}

const ButtonApprove: FC<ButtonApproveProps> = (props) => {
    return (
        <div className={styles.btnWrapper}>
            <button
                className={styles.btn}
                onClick={props.handleClick}
            >
                    <span>{props.textContent}</span>
            </button>
        </div>
    );
}

export default ButtonApprove;