import "./styles.scss";
import NewsWidget from "./widgets/news-widget/news-widget.js";
import ChannelWidget from "./widgets/channel-widget/channel-widget.js";

export default {
  'channel-widget': () => {    
    const channelWidget = new ChannelWidget();   
    const items = document.querySelector('#news-channels');
    channelWidget.setRenderElements(items); 
    return channelWidget;
  },
  'news-widget': (channelItem) => {
    const channel = {
      channelId: channelItem.getAttribute('id'),
      channelName: channelItem.getAttribute('name')
    }
    const container = document.querySelector('.container');
    const newsWidget = new NewsWidget(container, channel);
    newsWidget.initContainer();
    const elements = {
      items: document.querySelector('#news-items'),
      header: document.querySelector('#news-header'),
      bcActive: document.querySelector('.active')
    };
    newsWidget.setRenderElements(elements);
    return newsWidget;
  }
};