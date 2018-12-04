import Template from "./app_template.js"
import RenderStrategyService from "./services/render-strategy-service.js"
import CommonRenderer from "./services/common-renderer.js"
import Controller from "./controllers/controller.js"

document.addEventListener('DOMContentLoaded', async () => {

    const container = document.querySelector(".container");
    
    const commonRenderer = new CommonRenderer();
    const renderStrategyService = new RenderStrategyService(commonRenderer);

    renderStrategyService.render(container, Template());

    document.querySelector('#show-news-btn').onclick = async () => {          
        const controller = new Controller();
        const channelWidget = await controller.getChannels();
        await channelWidget.bootstrap();
    }
});