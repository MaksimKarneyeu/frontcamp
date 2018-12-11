import RenderContainer from "./news-widget_template.js"
import RenderItem from "./news-item-widget_template.js"
import ProxyCallService from "../../services/proxy-call-service.js";
import Config from "../../config.json";

export default class NewsWidget {
    constructor(container, channel) {
        this.container = container;        
        this.channel = channel;         
        
        this.newsUrl = `${Config.newsEndpoint}?sources=${this.channel.channelId}
        &apiKey=${Config.apiKey}&pagesize=${Config.newsPageSize}&page=${Config.newsPage}`;        
    }

    initContainer() {        
        this.container.innerHTML = RenderContainer();
    }

    setRenderElements(elements) {
        this.items = elements.items;
        this.header = elements.header;
        this.bcActive = elements.bcActive;
    }

    async bootstrap() {
        const data = await this.loadData();
        this.render(data);
    }

    async loadData() { 
        const response = await new ProxyCallService().doGet(this.newsUrl);
        const data = await response;
        return !response.ok ? data.articles : [];  
    }

    render(data) {
        data.map(element => this.items.innerHTML += RenderItem(element));
        this.header.innerHTML = this.channel.channelName;
        this.bcActive.innerHTML = this.channel.channelName;
    }
}