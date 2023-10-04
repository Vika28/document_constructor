import React from 'react';
import styles from "./DocumentHeader.module.css";
import Store from "../../store/store";
import {observer} from "mobx-react";

const DocumentHeader = () => {
    return (
        <div className={styles.header}>
            <p>Тип РСО: <span>{Store.currentDocument.type}</span></p>
            <p>Тип дисципліни: <span>{Store.currentDocument.disciplineType}</span></p>
        </div>
    );
}

export default observer(DocumentHeader);