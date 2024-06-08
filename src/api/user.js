import request from '@/utils/request'

//注册 (后端请求体类型是x-www-form-urlencoded 格式，所以需要使用 URLSearchParams)
export const registerService = (registerData) => {
    var params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

// 简写
// export const registerService = (registerData) => {
//     const params = new URLSearchParams(registerData);
//     return request.post('/user/register', params);
// }

//登录
export const loginService = (loginData)=>{
    var params = new URLSearchParams()
    for(let key in loginData){
        params.append(key,loginData[key])
    }
    return request.post('/user/login',params)
}

