import ProxyCallService from "../services/proxy-call-service.js";
import Config from "../config.json";
import WidgetsFactory from "../widgets-factory.js";

export default class Controller {   

    async getChannels() {
        const channelsUrl = `${Config.channelsEndpoint}?apiKey=${Config.apiKey}`;     
        const response = await new ProxyCallService().doGet(channelsUrl);        
        const data = await response;
        const sources = !response.ok ? data.sources : [];
        const model = { items: Config.sourcesId, data: sources };
        return WidgetsFactory.create('channel-widget', model);
    }

    async getNews(channel) {        
        const newsUrl = `${Config.newsEndpoint}?sources=${channel.channelId}
        &apiKey=${Config.apiKey}&pagesize=${Config.newsPageSize}&page=${Config.newsPage}`;  
        const settings = Config.newsWidgetRenderIds;      
        const response = await new ProxyCallService().doGet(newsUrl);
        const data = await response;
        const articles = !response.ok ? data.articles : [];  
        const model = { ...settings, data: articles, item: channel };
        return WidgetsFactory.create('news-widget', model);
    }
}