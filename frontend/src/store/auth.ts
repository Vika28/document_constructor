import {makeAutoObservable} from "mobx";
import {LoginResponse} from "../interfaces/LoginResponse";

export default class Auth {
    isAuth = false;
    username = '';

    constructor() {
        makeAutoObservable(this);
    }

    checkUser() {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        if(token && username) {
            this.setAuth(true)
            this.setUsername(username)
        } else {
            this.setAuth(false)
            this.setUsername('')
        }
    }

    setAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    setUsername(username: string) {
        this.username = username;
    }

    async login(response: LoginResponse) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.username)
        this.setAuth(true);
        this.setUsername(response.username)
    }

    logout() {
        this.setAuth(false)
        this.setUsername('')
        localStorage.removeItem('token')
    }
}