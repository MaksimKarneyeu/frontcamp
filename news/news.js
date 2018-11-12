{  
    const callManager = new CallManager();   
    const searchParams = new URLSearchParams(window.location.search);  
    const newsId = searchParams.get("id");
    const newsName = searchParams.get("name");
    const pageSize = 10;
    const page = 1;
    const newsUrl = `https://newsapi.org/v2/top-headlines?sources=${newsId}&apiKey=5e80c4b9ce1b45d1a1e69e81bfe6fe51&pagesize=${pageSize}&${page}`;    

    callManager.doGet(newsUrl, (data) => {
        let channelItems = data.articles.map(x =>
            `<li class="media">
            <a class="pull-left" href="${x.url}">
            <img class="media-object image-size" src="${x.urlToImage}">
            </a>
            <div class="media-body">
            <h4 class="media-heading"><a href="${x.url}">${x.title}</a></h4>
            <p>${x.description === null ? " " : x.description}</p>    
            </div>
            </li>`);

            $("#news-header").html(newsName);
            $("#news-items").html(channelItems);
   
    }, (error) => {alert(error)})
}