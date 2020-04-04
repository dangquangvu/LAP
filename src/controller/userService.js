import axios from "axios";

const API_URL = "http://localhost:3334/auth/";

class AuthService {
    login(user) {
        return axios
            .post(API_URL + "logIn", {
                email: user.email,
                password: user.password
            }, { headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            })

    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user) {
        return axios
            .post(API_URL + "register", {
                username: user.username,
                email: user.email,
                password: user.password
            }, { headers: { 'Content-Type': 'application/json' } })
            .then(data => {
                return data;
            })
            .catch(err => {
                return err;
            });
    }
}

export default new AuthService();