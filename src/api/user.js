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


//获取个人信息
export const userInfoGetService = ()=>{
    return request.get('/user/userInfo');
}

//修改个人信息
export const userInfoUpdateService = (userInfo)=>{
    return request.put('/user/update',userInfo)
}

//修改头像
export const userAvatarUpdateService=(avatarUrl)=>{
    let params = new URLSearchParams();
    params.append('avatarUrl',avatarUrl)
    return request.patch('/user/updateAvatar',params)
}

//更新用户密码
export const userPasswordUpdateService = (userInfo)=>{
    return request.patch('/user/updatePwd',userInfo)
}