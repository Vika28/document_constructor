import React, {FC, useState} from 'react';
import styles from './leftsidebar.module.css';
import Menu from "./Menu/Menu";

interface LeftSidebarProps {
    // isShow: boolean;
    onToggleIsShow: (isShow: boolean) => void;
}

const LeftSidebar: FC<LeftSidebarProps> = (props) => {
    // todo function getTeacher(useEffect?)

    const [teacher, setTeacher] = useState(['Ivanov I']);


    return (
        <div className={styles.leftSidebarWrapper}>
            <p className={styles.leftSidebarTitle}>Перелік дисциплін {teacher}</p>
            <Menu
                onToggleIsShow={props.onToggleIsShow}
             />
        </div>
    );
}

export default LeftSidebar;