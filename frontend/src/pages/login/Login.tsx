import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './Auth.module.css';
import ButtonApprove from "../../components/common/buttonApprove/ButtonApprove";
import AuthService from "../../services/AuthService";
import {Context} from "../../index";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {auth} = useContext(Context);


    const postLoginDetails = () => {
        AuthService.login({email, password}).then((loginResponse) => {
            auth.login(loginResponse);
            navigate("/dashboard");
        }).catch((err) => console.error(err));
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        postLoginDetails();
        setPassword("");
        setEmail("");
    };

    const gotoSignUpPage = () => navigate("/register");

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.authContainer}>
                    <h2 className={styles.title}>Вхід</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            id='email'
                            name='email'
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
                            textContent={'Вхід'}
                        />
                        <p className={styles.authFormHint}>
                            Немає акаунту?{" "}
                            <span className={styles.link} onClick={gotoSignUpPage}>
                        Зареєструватися
                         </span>
                        </p>

                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
