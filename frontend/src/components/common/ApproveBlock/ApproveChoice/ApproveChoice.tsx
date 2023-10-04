import React from 'react';
import styles from './ApproveChoice.module.css';
import Store from "../../../../store/store";

const ApproveChoice = () => {
    const handleClick = () => {
        Store.setShowBlock(false);
        // todo пост запит із поміченим обраним блоком для
        //  оновлення повністю документу, тобто треба створити на бекенді
        //  ендпоїнт на апдейт карент доку
    }

    return (
        <button
            className={styles.btn}
            onClick={handleClick}
        >Підтвердити вибір</button>
    );
}

export default ApproveChoice;