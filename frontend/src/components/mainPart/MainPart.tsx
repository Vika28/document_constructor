import React, {FC} from 'react';
import styles from './mainPart.module.css';
import Form from "../formCreate/Form";
import SylabusPage from "../SylabysPage/SylabusPage";
import Store from "../../store/store";
import { observer } from "mobx-react";

interface MainPartProps {

}

const MainPart: FC<MainPartProps> = (props) => {
    return (
        <div className={styles.mainPart}>
            <h2 className={styles.mainPartTittle}>Основна робоча частина</h2>
            {Store.isShown ? (
                <Form />
            ) : (
                <></>
            )
            }
            {Store.isShownSylabus && !Store.isShown ? (
                <SylabusPage />
            ) : (
                <></>
            )}

        </div>
    );
}

export default observer(MainPart);