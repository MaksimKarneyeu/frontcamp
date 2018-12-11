import ProxyCallService from "../../services/proxy-call-service.js";
import config from "../../config.json";
import NewsView from "./news-view.js";

export default class NewsWidget {
    constructor(options) {
        this.view = new NewsView(options.container, options.elements, options.name);     
        this.newsUrl = `${config.newsEndpoint}?sources=${options.id}
        &apiKey=${config.apiKey}&pagesize=${config.newsPageSize}&page=${config.newsPage}`;        
    }       

    async bootstrap() {
        const data = await this.loadData();
        this.view.render(data);
    }

    async loadData() { 
        const response = await new ProxyCallService().doGet(this.newsUrl);
        const data = await response;
        return !response.ok ? data.articles : [];  
    }    
}