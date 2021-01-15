import Api from "../helper/Api";
import { USER, USER_LOGIN } from "./type";

export function fetchData() {

}

export function userLogin(params: { username: string, password: string }) {
    return {
        type: USER_LOGIN,
        payload: params
    }
}

export async function fetchLogin(params: { username: string, password: string }) {
    try {
        // let formData = new FormData();
        // formData.append('username', params.username)
        // formData.append('password', params.password)
        let response: any = await Api('login').post({
            body: params
        })

        return response;
    } catch (err) {
        console.log(err)
    }
}

export function logout() {
    return {
        type: USER.LOGOUT
    }
}

export function updateProfile(data: { title?: string, phone?: string, password?: string, oldPassword?: string }) {
    return {
        type: USER.UPDATE,
        paylod: data
    }
}

export async function fetchUpdateProfile(data: any) {
    try {
        // let formData = new FormData();
        // formData.append('username', params.username)
        // formData.append('password', params.password)
        let response: any = await Api('update').post({
            body: data
        })

        return response;
    } catch (err) {
        console.log(err)
    }
}