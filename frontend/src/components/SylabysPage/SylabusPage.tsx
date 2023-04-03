import React, { FC } from 'react';
import styles from './sylabusPage.module.css';

interface SylabusPageProps {
    currentSylabus: { id: number; disciplineId: number; sylabusName: string; type: string; isShowSylabys: boolean };
    disciplineId: number;
}

const SylabusPage: FC<SylabusPageProps> = (props) => {
    return (
        <div>
            <div className={styles.header}>
                <p>Назва силабусу: <span>{props.currentSylabus.sylabusName}</span></p>
                <p>тип силабусу: <span>{props.currentSylabus.type}</span></p>
                <p>Дисципліна Id <span>{props.currentSylabus.disciplineId}</span> </p>
            </div>
        </div>
    );
}

export default SylabusPage;