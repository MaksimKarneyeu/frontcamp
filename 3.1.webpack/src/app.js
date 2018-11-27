import RenderContainer from "./app_template.js"

window.onload = async () => {

    const container = document.querySelector(".container");
    container.innerHTML += RenderContainer();

    document.querySelector('#show-news-btn').onclick = async () => {
        const init = await import(/* webpackChunkName: "widget-initializer" */ "./widget-initializer.js");
        const channelWidget = init.default['channel-widget']();
        await channelWidget.bootstrap();
    }
}