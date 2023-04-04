import React, {FC, useState} from 'react';
import styles from './leftsidebar.module.css';
import Menu from "./Menu/Menu";
import {observer} from "mobx-react";

interface LeftSidebarProps {
}

const LeftSidebar: FC<LeftSidebarProps> = (props) => {
    // todo function getTeacher(useEffect?)

    const [teacher, setTeacher] = useState(['Ivanov I']);

    return (
        <div className={styles.leftSidebarWrapper}>
            <p className={styles.leftSidebarTitle}>Перелік дисциплін {teacher}</p>
            <Menu />
        </div>
    );
}

export default observer(LeftSidebar);