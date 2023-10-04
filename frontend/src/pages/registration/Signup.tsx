import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../login/Auth.module.css";
import ButtonApprove from "../../components/common/buttonApprove/ButtonApprove";
import Header from "../../components/header/Header";
import AuthService from "../../services/AuthService";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const gotoLoginPage = () => navigate("/");

    const postSignUpDetails = () => {
        AuthService.signup({email, username, password})
            .then((response) => {
                navigate("/");
            })
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        postSignUpDetails();
        setEmail("");
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.authContainer}>
                    <h2 className={styles.title}>Реєстрація</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={username}
                            required
                            placeholder='Прізвище та імʼя'
                            className={styles.input}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type='email'
                            name='email'
                            id='email'
                            value={email}
                            required
                            placeholder='Логін'
                            className={styles.input}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            name='password'
                            id='password'
                            minLength={8}
                            required
                            value={password}
                            placeholder='Пароль'
                            className={styles.input}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ButtonApprove
                            textContent={'Зареєструватися'}
                        />
                        <p className={styles.authFormHint}>
                            Уже є акаунт?{" "}
                            <span className={styles.link} onClick={gotoLoginPage}>
                        Увійти
                         </span>
                        </p>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Signup;