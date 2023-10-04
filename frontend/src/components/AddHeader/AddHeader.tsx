import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styles from './AddHeader.module.css';
import ApproveBlock from "../common/ApproveBlock/ApproveBlock";
import {observer} from "mobx-react";
import TemplatesService from "../../services/TemplatesService";
import {TemplateType} from "../../interfaces/TemplateType";
import {Template} from "../../interfaces/Template";
import {Document} from "../../interfaces/Document";
import DocumentService from "../../services/DocumentService";

interface AddHeaderProps {
    document: Document | undefined;
    setDocument: Dispatch<SetStateAction<Document | undefined>>
}

const AddHeader: FC<AddHeaderProps> = ({document, setDocument}) => {
    const [headers, setHeaders] = useState<Template[]>([]);
    const [selectedHeaderIndex, setSelectedHeaderIndex] = useState<number>();

    const handleHeaderClick = (index: number) => {
        setSelectedHeaderIndex(index);
    };

    useEffect(()=> {
        TemplatesService.findAllTemplates(TemplateType.HEADER).then((data) => {
            console.log(data)
            setHeaders(data)
        })
    }, [])

    const saveHeader = () => {
        if(!document || !selectedHeaderIndex) {
            return
        }
        document.content = headers.at(selectedHeaderIndex-1)?.content
        DocumentService.addHeader(document).then((data) => {
            console.log(data);
            setDocument(data);
        })
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Додайте шапку документу:</p>
            <div className={styles.itemsWrapper}>
                {
                    headers.map((headers) => {
                        return (
                            <div
                                className={`${styles.itemWrapper} ${
                                    selectedHeaderIndex === headers.id ? styles.selected : ''
                                }`}
                                onClick={() => handleHeaderClick(headers.id)}
                                key={headers.id}
                                >
                                <img src={JSON.parse(headers.content).imageSrc}/>
                            </div>
                        )
                    })
                }

            </div>
            <ApproveBlock save={saveHeader}/>
        </div>
    );
}

export default observer(AddHeader);