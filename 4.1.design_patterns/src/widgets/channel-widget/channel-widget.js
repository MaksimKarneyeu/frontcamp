import RenderItem from "./channel-item-widget_template.js";
import Config from "../../config.json";

export default class ChannelWidget {
    constructor(data, controller) {     
        this.data = data;      
        this.controller = controller;
    }

    setRenderElements(items) {
        this.items = items;
    }

    async bootstrap() {      
        this.render(this.data);
        this.initEvents();
    }    

    render(data) {
        data.map(element => this.items.innerHTML += RenderItem(element));
    }

    initEvents() {
        const elements = this.items.childNodes;       
        for (let index = 0; index < elements.length; index++) {
            elements[index].onclick = async () => {  
                const element = elements[index];         
                const channel = {
                    channelId: element.getAttribute(Config.channel.channelId),
                    channelName: element.getAttribute(Config.channel.channelName)
                  }     
                const channelWidget = await this.controller.getNews(channel);
                await channelWidget.bootstrap();
            }
        }
    }
}