import BaseCallService from "./base-call-service.js";

export default class CallService extends BaseCallService {
    constructor(){
        super();
    }
    doGet(url) {
        return fetch(url).then(async (response) => !response.ok ?
            await Promise.reject(response.statusText) : response.json());
    }
}