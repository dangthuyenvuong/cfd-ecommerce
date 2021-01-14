import Api from "../helper/Api";
import { USER_LOGIN } from "./type";

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

        console.log(response)
        return response;
    } catch (err) {
        console.log(err)
    }
}