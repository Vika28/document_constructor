import React, {FC} from 'react';
import styles from './mainPart.module.css';
import Form from "../formCreate/Form";

interface MainPartProps {
    isShow: boolean;
    onToggleIsShow: (isShow: boolean) => void;
}

const MainPart: FC<MainPartProps> = (props) => {
    return (
        <div className={styles.mainPart}>
            <h2 className={styles.mainPartTittle}>Основна робоча частина</h2>
            {props.isShow ? (
                <Form
                    onToggleIsShow={props.onToggleIsShow}
                />
            ) : (
                <></>
            )
            }

        </div>
    );
}

export default MainPart;