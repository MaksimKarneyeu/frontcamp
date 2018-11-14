export default class CallManager{
  static doGet(url){
    return fetch(url).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });     
    }
}