import { render } from "./news.template.js"
import CallManager from "../shared/callManager.js";
import Config from "../../configs/config.js"

const searchParams = new URLSearchParams(window.location.search);
const newsId = searchParams.get("id");
const newsName = searchParams.get("name");
const pageSize = 10;
const page = 1;
const newsUrl = `${Config.newsEndpoint}?sources=${newsId}&apiKey=${Config.apiKey}&pagesize=${pageSize}&page=${page}`;
const newsHeaderId = "news-header";
const newsItemsId = "news-items";
const positionToPasteNews = "afterbegin";

CallManager.doGet(newsUrl).then(data => {
    const newsHeader = document.getElementById(newsHeaderId);
    const newsItems = document.getElementById(newsItemsId);

    data.articles.sort((first, second) => second.title.localeCompare(first.title)).map(news =>
        newsItems.insertAdjacentHTML(positionToPasteNews, render(news)));
    newsHeader.insertAdjacentText(positionToPasteNews, newsName);

}).catch(error => { alert(error) });