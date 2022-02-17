const TOKEN_KEY = 'token'
// const REFRESH_TOKEN_KEY = 'Refresh';
// let refreshToken = null

const TokenService = {
    getToken(){
        return localStorage.getItem(TOKEN_KEY)
    },
    saveToken(token){
            localStorage.setItem(TOKEN_KEY, token);
            axios.defaults.headers.common['id'] = 'Bearer ' + token;
        },
    setToken(token){
        localStorage.setItem(TOKEN_KEY, token);
    },
    removeToken(){
        localStorage.removeItem(TOKEN_KEY)
    }
};

export default TokenService
