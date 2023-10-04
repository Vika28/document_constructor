import React, {FC} from 'react';
import styles from './Leftsidebar.module.css';
import Menu from "./Menu/Menu";
import {observer} from "mobx-react";

const LeftSidebar = () => {

    return (
        <div className={styles.leftSidebarWrapper}>
            <p className={styles.menuName}>Меню</p>
            <Menu />
        </div>
    );
}

export default observer(LeftSidebar);