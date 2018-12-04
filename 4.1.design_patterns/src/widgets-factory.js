import "./styles.scss";
import NewsWidget from "./widgets/news-widget/news-widget.js";
import ChannelWidget from "./widgets/channel-widget/channel-widget.js";
import Controller from "./controllers/controller.js";

export default class WidgetsFactory {

  static create(widget, model) {
    switch (widget) {
      case 'channel-widget':
        const controller = new Controller();
        const channelWidget = new ChannelWidget(model.data, controller);
        const items = document.querySelector(model.items);
        channelWidget.setRenderElements(items);
        return channelWidget;

      case 'news-widget':          
        const container = document.querySelector(model.container);
        const newsWidget = new NewsWidget(container, model.item, model.data);
        newsWidget.initContainer();
        const elements = {
          items: document.querySelector(model.elements.items),
          header: document.querySelector(model.elements.header),
          bcActive: document.querySelector(model.elements.bcActive)
        };
        newsWidget.setRenderElements(elements);
        return newsWidget;
    }
  }
}