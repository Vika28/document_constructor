import React, {FC} from 'react';
import styles from './GreyBlock.module.css';
import { observer} from "mobx-react";

interface GreyBlockProps {
    title: string,
    content?: string,
    handleBlockClick?: () => void,
}

const GreyBlock: FC<GreyBlockProps> = (props) => {
    return (
        <div
            onClick={props.handleBlockClick}
            className={styles.wrapper}
        >
            {
                props.content ? (
                    <img src={JSON.parse(props.content).imageSrc} alt="header"/>
                ) : (
                    <p className={styles.title}>{props.title}</p>
                )
            }
        </div>
    );
}

export default observer(GreyBlock);