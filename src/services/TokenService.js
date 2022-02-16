const TOKEN_KEY = 'token'
// const REFRESH_TOKEN_KEY = 'Refresh';
// let refreshToken = null

const TokenService = {
    getToken(){
        return localStorage.getItem(TOKEN_KEY)
    },
    setToken(token){
        localStorage.setItem(TOKEN_KEY, token);
    },
    removeToken(){
        localStorage.removeItem(TOKEN_KEY)
    }
};

export default TokenService
