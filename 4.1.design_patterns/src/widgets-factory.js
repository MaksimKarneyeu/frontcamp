import "./styles.scss";
import NewsWidget from "./widgets/news-widget/news-widget.js";
import ChannelWidget from "./widgets/channel-widget/channel-widget.js";

export default class WidgetsFactory {

  static create(widget, options) {
    switch (widget) {
      case 'channel-widget':
        const channelWidget = new ChannelWidget();
        const items = document.querySelector(options);
        channelWidget.setRenderElements(items);
        return channelWidget;

      case 'news-widget':              
        const channel = {
          channelId: options.item.getAttribute(options.channel.channelId),
          channelName: options.item.getAttribute(options.channel.channelName)
        }
        const container = document.querySelector(options.container);
        const newsWidget = new NewsWidget(container, channel);
        newsWidget.initContainer();
        const elements = {
          items: document.querySelector(options.elements.items),
          header: document.querySelector(options.elements.header),
          bcActive: document.querySelector(options.elements.bcActive)
        };
        newsWidget.setRenderElements(elements);
        return newsWidget;
    }
  }
}