import React, {FC, useEffect, useState} from 'react';
import styles from "./documents.module.css";
import Button from "../../../common/button/Button";
import {Discipline} from "../../../../interfaces/Discipline";
import {Document} from "../../../../interfaces/Document";
import Store from "../../../../store/store";
import {observer} from "mobx-react";
import DocumentService from "../../../../services/DocumentService";
import {Link, useNavigate} from "react-router-dom";


interface DocumentsProps {
    currentDiscipline: Discipline;
}

const Documents: FC<DocumentsProps> = ({currentDiscipline}) => {

    const [clickedDocumentId, setClickedDocumentId] = useState<null | number>(null);
    const navigate = useNavigate();

    const handleDocumentClick = (document: Document) => {
        navigate(`document/${document.id}/editor`)
    }


    const handleBtnCreateClick = () => {
        navigate(`discipline/${currentDiscipline.id}/create-document`)
    }

    function getDocuments() {
        if (!currentDiscipline.documents) {
            return (<></>)
        }

        return currentDiscipline.documents.map((document, index) => (
            <div
                className={`${styles.sylabusWrapper}
                                        ${clickedDocumentId === document.id ? styles.active : ''}`}
                onClick={() => handleDocumentClick(document)}
            >
                    {document.name}
            </div>
        ))
    }

    return (
        <div className={styles.sylabusyWrapper}>
            <div className={styles.btnWrapper}>
                <Button
                    textContent='Створити новий силабус'
                    handleClick={() => handleBtnCreateClick()}
                />
            </div>
            <div
                className={styles.sylabusesWrapper}
            >
                {
                    getDocuments()
                }
            </div>
        </div>
    )
}

export default observer(Documents);