import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./ApproveBlock.module.css";
import ApproveChoice from "./ApproveChoice/ApproveChoice";
import {Document} from "../../../interfaces/Document";

interface ApproveBlockProps {
    save: () => void
}


const ApproveBlock: FC<ApproveBlockProps> = ({save}) => {
    return (
        <div className={styles.approveWrapper}>
            <p className={styles.approveTitle}>Для додавання  блоків в силабус оберіть необхідні із списку вище та підтвердіть свій вибір.</p>
            <div onClick={save} className={styles.btn}>
                <ApproveChoice />
            </div>
        </div>
    );
}

export default ApproveBlock;