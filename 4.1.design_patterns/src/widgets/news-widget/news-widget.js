import RenderContainer from "./news-widget_template.js"
import RenderItem from "./news-item-widget_template.js"

export default class NewsWidget {
    constructor(container, channel, data) {
        this.container = container;        
        this.channel = channel;         
        this.data = data;           
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
        this.render(this.data);
    }    

    render(data) {
        data.map(element => this.items.innerHTML += RenderItem(element));
        this.header.innerHTML = this.channel.channelName;
        this.bcActive.innerHTML = this.channel.channelName;
    }
}