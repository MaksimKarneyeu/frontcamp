import Init from "./widget-initializer.js";

window.onload = async () => {
    const channelWidget = Init['channel-widget']();
    await channelWidget.bootstrap();
}