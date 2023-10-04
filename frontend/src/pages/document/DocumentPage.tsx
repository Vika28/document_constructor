import React, {FC, useEffect, useState} from 'react';
import styles from './DocumentPage.module.css';
import { observer } from "mobx-react";
import Store from "../../store/store";
import GreyBlock from "../../components/common/GreyBlock/GreyBlock";
import AddHeader from "../../components/AddHeader/AddHeader";
import DocumentHeader from "../../components/DocumentHeader/DocumentHeader";

const DocumentPage = () => {

    // todo так то  я тут маю робити гет із конкретним доком,
    //  але я роблю клік у файлі Documents і якщо без стору
    //  то як я розумію треба просами прокидувати цей док
    //  звдіти щоб тут зробити запрос
    const handleBlockClick = () => {
        Store.setShowBlock(true);
    }

    const [headerContent, setHeaderContent] = useState('');

    return (
        <div className={styles.wrapper}>
            {
                !Store.showBlock ? (
                <div className={styles.container}>
                    <h1 className={styles.title}>Основна робоча частина</h1>
                    <DocumentHeader />
                    <GreyBlock
                        title='Додати шапку документу'
                        content={headerContent}
                        handleBlockClick={handleBlockClick}
                    />
                    <GreyBlock
                        title='Додати назву дисципліни'
                    />
                </div>
                ) : (
                    <></>
                )
            }
        </div>
    );
}

export default observer(DocumentPage);