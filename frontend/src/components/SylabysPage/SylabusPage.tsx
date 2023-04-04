import React, { FC } from 'react';
import styles from './sylabusPage.module.css';
import { observer } from "mobx-react";
import Store from "../../store/store";


interface SylabusPageProps {

}

const SylabusPage: FC<SylabusPageProps> = (props) => {
    return (
        <div>
            <div className={styles.header}>
                <p>Назва силабусу: <span>{Store.currentSylabus.sylabusName}</span></p>
                <p>тип силабусу: <span>{Store.currentSylabus.type}</span></p>
                <p>Дисципліна Id <span>{Store.currentSylabus.disciplineId}</span> </p>
            </div>
        </div>
    );
}

export default observer(SylabusPage);