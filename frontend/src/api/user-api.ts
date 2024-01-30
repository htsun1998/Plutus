import request from '../utils/request.ts'
import { useUserStore } from "../store/user-store.ts"

export function loginApi(data: any) {
    return request.post(
        "/user/login",
        data)
}

export function registerApi(data: any) {
    return request.post(
        "/user/register",
        data
    )
}

export function userInfoApi() {
    const tokenStore = useUserStore()
    return request.get(
        "/user/userInfo",
        {
            headers: {'Authorization': tokenStore.token}
        })
}

export function updateUserInfoApi(data: any) {
    const tokenStore = useUserStore()
    return request.put(
        "/user/update",
        data,
        {
            headers: {'Authorization': tokenStore.token}
        })
}
