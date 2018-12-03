import RenderItem from "./channel-item-widget_template.js";
import ProxyCallService from "../../services/proxy-call-service.js";
import Config from "../../config.json";
import WidgetsFactory from "../../widgets-factory.js";

export default class ChannelWidget {
    constructor(container) {
        this.container = container;
        this.channelsUrl = `${Config.channelsEndpoint}?apiKey=${Config.apiKey}`;
    }

    setRenderElements(items) {
        this.items = items;
    }

    async bootstrap() {
        const data = await this.loadData();
        this.render(data);
        this.initEvents();
    }

    async loadData() {
        const response = await new ProxyCallService().doGet(this.channelsUrl);
        const data = await response;
        return !response.ok ? data.sources : [];
    }

    render(data) {
        data.map(element => this.items.innerHTML += RenderItem(element));
    }

    initEvents() {
        let elements = this.items.childNodes;
        const settings = Config.newsWidgetRenderIds;
        for (let index = 0; index < elements.length; index++) {
            elements[index].onclick = async () => {
                const options = { ...settings, item: elements[index]};
                const newsWidget = WidgetsFactory.create('news-widget', options);
                await newsWidget.bootstrap();
            }
        }
    }
}