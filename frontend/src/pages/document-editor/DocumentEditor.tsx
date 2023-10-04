import Store from "../../store/store";
import React, {useEffect, useState} from "react";
import styles from "../document/DocumentPage.module.css";
import DocumentHeader from "../../components/DocumentHeader/DocumentHeader";
import GreyBlock from "../../components/common/GreyBlock/GreyBlock";
import AddHeader from "../../components/AddHeader/AddHeader";
import {observer} from "mobx-react";
import {useParams} from "react-router-dom";
import DocumentService from "../../services/DocumentService";
import {Document} from "../../interfaces/Document";


const DocumentEditor = () => {
    const [document, setDocument] = useState<Document>();
    // todo так то  я тут маю робити гет із конкретним доком,
    //  але я роблю клік у файлі Documents і якщо без стору
    //  то як я розумію треба просами прокидувати цей док
    //  звдіти щоб тут зробити запрос
    const handleBlockClick = () => {
        Store.setShowBlock(true);
    }

    const {documentId} = useParams();

    useEffect(() => {
        if (!documentId) {
            return
        }
        const docId = parseInt(documentId);
        DocumentService.findDocumentById(0, docId)
            .then(data => {
                setDocument(data)
                return data;
            })
    }, [documentId])

    return (
        <div className={styles.wrapper}>
            {
                !Store.showBlock ? (
                    <>
                        <h1 className={styles.title}>Основна робоча частина</h1>
                        <div className={styles.container}>

                            <DocumentHeader/>
                            <GreyBlock
                                title='Додати шапку документу'
                                content={document?.content}
                                handleBlockClick={handleBlockClick}
                            />

                            <GreyBlock
                                title='Додати назву дисципліни'
                            />
                        </div>
                    </>

                ) : (
                    <AddHeader document={document} setDocument={setDocument}/>
                )
            }
        </div>
    );
}

export default observer(DocumentEditor);