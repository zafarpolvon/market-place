const TOKEN_KEY = 'Authorization';
// const REFRESH_TOKEN_KEY = 'Refresh';
const EXPIRE = 'Expire';
// let refreshToken = null


const TokenService = {
    getToken(){
        return localStorage.getItem(TOKEN_KEY)
    },
    setToken(token, expire){
        localStorage.setItem(TOKEN_KEY, token);
        if (expire){
            expire = new Date().getTime() + (expire * 1000);
            localStorage.setItem(EXPIRE, expire)
        }
    },
    removeToken(){
        localStorage.removeItem(TOKEN_KEY)
    }
};

export default TokenService
