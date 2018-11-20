import RenderContainer from "./channel-widget_template.js"
import RenderItem from "./channel-item-widget_template.js"
import CallService from "../../services/call-service.js";
import Config from "../../config.js"
import Init from "../../widget-initializer.js";

export default class ChannelWidget {
    constructor(container) {
        this.container = container;
        this.channelsUrl = `${Config.channelsEndpoint}?apiKey=${Config.apiKey}`;   
    }

    initContainer() {
        this.container.innerHTML = RenderContainer();
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
        const response = await CallService.doGet(this.channelsUrl);
        const data = await response;
        return !response.ok ? data.sources : [];
    }

    render(data) {
        data.map(element => this.items.innerHTML += RenderItem(element));
    }

    initEvents() {
        let elements = this.items.childNodes;
        for (let index = 0; index < elements.length; index++) {
            elements[index].onclick = async () => {
                const newsWidget = Init['news-widget'](elements[index]);
                await newsWidget.bootstrap();
            }
        }
    }
}