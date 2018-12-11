import template from "./app_template.js"
import RenderStrategyService from "./services/render-startegy-service.js"
import CommonRenderer from "./services/common-renderer.js"


document.addEventListener('DOMContentLoaded', async () => {

    const container = document.querySelector(".container");

    const commonRenderer = new CommonRenderer();
    const renderStrategyService = new RenderStrategyService(commonRenderer);

    renderStrategyService.render(container, template());

    document.querySelector('#show-news-btn').onclick = async () => {
        const widgetsFactory = await import(/* webpackChunkName: "widgets-factory" */ "./widgets-factory.js");
        const option = '#news-channels';
        const channelWidget = widgetsFactory.default.create('channel-widget', option);
        await channelWidget.bootstrap();
    }
});