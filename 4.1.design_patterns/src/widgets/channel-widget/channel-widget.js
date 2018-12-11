import View from "./channel-view.js";
import ProxyCallService from "../../services/proxy-call-service.js";
import config from "../../config.json";
import widgetsFactory from "../../widgets-factory.js";

export default class ChannelWidget {
    constructor(items) {
        this.view = new View(items);
        this.view.subscribe('click', this.bootstrapNewsWidget);
        this.channelsUrl = `${config.channelsEndpoint}?apiKey=${config.apiKey}`;
    }

    async bootstrap() {
        const data = await this.loadData();
        this.view.render(data);
    }

    async loadData() {
        const response = await new ProxyCallService().doGet(this.channelsUrl);
        const data = await response;
        return !response.ok ? data.sources : [];
    }

    async bootstrapNewsWidget(options) {
        const settings = config.newsWidgetRenderIds;
        options.onclick = async (event) => {
            const params = { ...settings, id: event.target.id, name: event.target.name };
            const newsWidget = widgetsFactory.create('news-widget', params);
            await newsWidget.bootstrap();
        }
    }
}