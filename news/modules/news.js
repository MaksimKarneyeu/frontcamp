import { newsTemplate } from "../templates/news.template.js"
import CallManager from "./callManager.js"
import {default as config} from "../configs/config.js"

(() => {
    const callManager = new CallManager();   
    const searchParams = new URLSearchParams(window.location.search);  
    const newsId = searchParams.get("id");
    const newsName = searchParams.get("name");
    const pageSize = 10;
    const page = 1;
    const newsUrl = `${config.newsEndpoint}?sources=${newsId}&apiKey=${config.apiKey}&pagesize=${pageSize}&page=${page}`;     
    const newsHeaderId = "news-header";
    const newsItemsId = "news-items";
    const positionToPasteNews = "afterbegin";
    const template = newsTemplate;
    
    callManager.doGet(newsUrl, (data) => {        
        const newsHeader = document.getElementById(newsHeaderId);
        const newsItems = document.getElementById(newsItemsId);         

        data.articles.sort((first, second) => second.title.localeCompare(first.title)).map(news =>
        newsItems.insertAdjacentHTML(positionToPasteNews, template(news)));        
        newsHeader.insertAdjacentText(positionToPasteNews, newsName);  
         
    }, (error) => {alert(error)})
})();