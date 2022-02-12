import axios from "axios";
import TokenService from "../../services/TokenService";
import router from "../../router";

window.axios = axios;
export const baseURL = "http://novamarket.qwertyuz.ru"

const http = axios.create({
    baseURL: baseURL + '/api/'
});

function setConfiguration(provider) {
    provider.interceptors.request.use(config => {
            let token = TokenService.getToken();
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            config.headers['Accept'] = 'application/json';
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => Promise.reject(error)
    );
    provider.interceptors.response.use(res => res.data,
        error => {
            if ( (error.response.status === 401 || error.response.status === 403)) {
                TokenService.removeToken();
                router.push({name: 'Login'}).then(() => {
                }).catch(e => {
                    console.log(e)
                })
            }
            return Promise.reject(error)
        });

}

setConfiguration(http)

axios.defaults.headers.common = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + TokenService.getToken(),
};
export default http
