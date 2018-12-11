import NewsWidget from "./widgets/news-widget/news-widget.js";
import ChannelWidget from "./widgets/channel-widget/channel-widget.js";

export default class WidgetsFactory {

  static create(widget, options) {
    switch (widget) {
      case 'channel-widget':
        return new ChannelWidget(options);

      case 'news-widget':
        return new NewsWidget(options);
    }
  }
}