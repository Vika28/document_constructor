import React, {FC, useContext, useState} from 'react';
import styles from "./header.module.css";
import {Link} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react";

interface HeaderProps {
}

const Header: FC<HeaderProps> = (props) => {
    const {auth} = useContext(Context);

    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <Link to={'/dashboard'}>
                    <p className={styles.logo}>Конструктор документів</p>
                </Link>
            </div>
            {
                auth.isAuth ?
                    <div className={styles.accInfoWrapper}>
                        <p className={styles.name}>{auth.username}</p>
                        <p onClick={() => auth.logout()}>
                            <Link className={styles.exit} to={'/'}>Вийти</Link>
                        </p>
                    </div>
                    : <></>
            }
        </div>
    );
}

export default observer(Header);