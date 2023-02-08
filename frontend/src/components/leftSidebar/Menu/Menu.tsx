import React, {FC} from 'react';
import styles from './menu.module.css';
import Button from "../../common/button/Button";

interface MenuProps {
    // isShow: boolean;
    onToggleIsShow: (isShow: boolean) => void;
}

const Menu: FC<MenuProps> = (props) => {

    const handleClick = (isShow: boolean): void => {
        console.log('function handleClick');
    };

    return (
        <div className={styles.menuWrapper}>
            <h3 className={styles.menuTitle}>Меню</h3>
            <p className={styles.disciplinesTitle}>Перелік дисциплін:</p>
            <Button
                textContent='Створити нову дисципліну'
                handleClick={()=>props.onToggleIsShow(true)}
            />
            <ul>

            </ul>
        </div>
    );
}

export default Menu;