export default class CallManager {
    static doGet(url) {
        return fetch(url).then(async (response) => !response.ok ?
         await Promise.reject(response.statusText) : response.json());
    }
}