import request from '@/utils/request'

//注册
export const registerService = (registerData) => {
    var params = new URLSearchParams()
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    return request.post('/user/register', params)
}

//登录
export const loginService = (loginData)=>{
    var params = new URLSearchParams()
    for(let key in loginData){
        params.append(key,loginData[key])
    }
    return request.post('/user/login',params)
}