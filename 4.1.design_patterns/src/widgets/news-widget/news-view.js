import renderContainer from "./news-widget_template.js"
import renderItem from "./news-item-widget_template.js"
import RenderStrategyService from "../../services/render-startegy-service.js"
import CommonRenderer from "../../services/common-renderer.js"

export default class NewsView {
    constructor(container, elements, channelName) {
        this.RenderStrategyService = new RenderStrategyService(new CommonRenderer());
        this.channelName = channelName;
        this.elements = elements;
        this.container = document.querySelector(container);
    }

    drawContainer() {
        this.container.innerHTML = renderContainer();
    }

    initElements() {
        this.items = document.querySelector(this.elements.items);
        this.header = document.querySelector(this.elements.header);
        this.bcActive = document.querySelector(this.elements.bcActive);
    }

    render(data) {
        this.drawContainer();
        this.initElements();
        data.map(element => this.RenderStrategyService.render(this.items, renderItem(element)));
        this.RenderStrategyService.render(this.header, this.channelName);
        this.RenderStrategyService.render(this.bcActive, this.channelName);
    }
}