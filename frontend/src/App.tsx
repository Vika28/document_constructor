import React, {FC, useState} from 'react';
import styles from './App.module.css';
import LeftSidebar from "./components/leftSidebar/leftSidebar";
import MainPart from "./components/mainPart/MainPart";
import RightSidebar from "./components/rigthSidebar/RightSidebar";
import { observer } from "mobx-react";

interface AppProps {

}

const App: FC<AppProps> = (props) => {

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
