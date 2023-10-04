import api from './index'

import {SignupRequest} from "../interfaces/SignupRequest";
import {LoginRequest} from "../interfaces/LoginRequest";
import {LoginResponse} from "../interfaces/LoginResponse";

class AuthService {
    static async signup(signupRequest: SignupRequest): Promise<SignupRequest> {
        return api
            .post(`/api/users/register`, signupRequest)
            .then((response) => response.data)
    }

    static async login(loginRequest: LoginRequest): Promise<LoginResponse> {
        return api
            .post<LoginResponse>(`/api/auth/`, loginRequest)
            .then((response) => response.data)
    }
}

export default AuthService;