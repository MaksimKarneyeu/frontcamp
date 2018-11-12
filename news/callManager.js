class CallManager{
    doGet(url, successfulAction, unsuccessfulAction){
        fetch(url).then((response) => {
            return response.json();
        })
        .then((data) => {   
            successfulAction.call(this, data);
            return data;            
        }).catch((error) => {
            unsuccessfulAction.call(this, error);
            return error;
        });   
    }
}