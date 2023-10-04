import React, {FC, useContext} from 'react';
import styles from './mainPart.module.css';
import DocumentPage from "../../pages/document/DocumentPage";
import Store from "../../store/store";
import { observer } from "mobx-react";
import {Context} from "../../index";

const MainPart = () => {
    const {auth} = useContext(Context);

    return (
        <div className={styles.mainPart}>

                <div className={styles.mainPartTittle}>
                    <h1>Вітаю {auth.username}!</h1>
                    <h2>Створіть дисципліну або оберіть документ для редагування</h2>
                </div>


            {Store.isShownSylabus && !Store.isShown ? (
                <DocumentPage />
            ) : (
                <></>
            )}

        </div>
    );
}

export default observer(MainPart);