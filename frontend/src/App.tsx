import React, {FC, useEffect, useState} from 'react';
import styles from './App.module.css';
import LeftSidebar from "./components/leftSidebar/leftSidebar";
import MainPart from "./components/mainPart/MainPart";
import RightSidebar from "./components/rigthSidebar/RightSidebar";
import { observer } from "mobx-react";
import Store from "./store/store";
import {getAllDisciplines} from "./services/APIservice";

interface AppProps {

}

const App: FC<AppProps> = (props) => {

    useEffect(() => {
        async function fetchDisciplines() {
            const data = await getAllDisciplines();
            Store.setDisciplines(data)
        }
        fetchDisciplines();
    }, []);
    return (
            <div className={styles.appWrapper}>
                <h1 className={styles.pageTitle}>Конструктор документів</h1>
                <div className={styles.app}>
                    <LeftSidebar />
                    <MainPart />
                    <RightSidebar />
                </div>
            </div>

  );
}

export default observer(App);
