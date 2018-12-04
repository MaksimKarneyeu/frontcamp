import BaseCallService from "./base-call-service.js";
import CallService from "./call-service.js";

export default class ProxyCallService extends BaseCallService {
    doGet(url) {
        console.log(`Call has started ${url}`)
        const callService = new CallService();
        return callService.doGet(url);
    }
}