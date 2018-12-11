import "../../styles.scss";
import renderItem from "./channel-item-widget_template.js";
import EventEmmiter from "../../services/EventEmmiterService.js";
import RenderStrategyService from "../../services/render-startegy-service.js"
import CommonRenderer from "../../services/common-renderer.js"

export default class ChannelView {
    constructor(items) {
        this.RenderStrategyService = new RenderStrategyService(new CommonRenderer());
        this.items =  document.querySelector(items);
        this.eventEmmiter = new EventEmmiter();
    }

    render(data) {
        data.map(element => this.RenderStrategyService.render(this.items, renderItem(element)));
        this.eventEmmiter.emit('click', this.items);
    }

    subscribe(event, fn) {
        this.eventEmmiter.subscribe(event, fn);
    }
}