import React, {FC, useState} from 'react';
import styles from './App.module.css';
import LeftSidebar from "./components/leftSidebar/leftSidebar";
import MainPart from "./components/mainPart/MainPart";
import RightSidebar from "./components/rigthSidebar/RightSidebar";

interface AppProps {
    // isShow: boolean;
}

const App: FC<AppProps> = (props) => {
    const [isShow, setIsShow] = useState(false);
    const toggleIsShow = (isShow: boolean) => {
        console.log('callback', isShow);
        setIsShow(isShow);
    }
  return (
      <div className={styles.appWrapper}>
          <h1 className={styles.pageTitle}>Конструктор документів</h1>
          <div className={styles.app}>
              <LeftSidebar
                  onToggleIsShow={toggleIsShow}
              />
              <MainPart
                  isShow={isShow}
                  onToggleIsShow={toggleIsShow}
              />
              <RightSidebar />
          </div>
      </div>

  );
}

export default App;
