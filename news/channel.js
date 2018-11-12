{
    const callManager = new CallManager();   
    const channelsUrl = 'https://newsapi.org/v2/sources?apiKey=5e80c4b9ce1b45d1a1e69e81bfe6fe51';    

    callManager.doGet(channelsUrl, (data) => {
        let channelItems = data.sources.map(x =>             
            `<a href=\"./news/news.html?name=${x.name}&id=${x.id}\"
            class=\"list-group-item\"> <b>${x.name}<b><br> <small>${x.description}</small></a`);   

            $("#news-channels").html(channelItems);
   
    }, (error) => {alert(error)})
}