import { channelTemplate } from "../templates/channel.template.js"
import CallManager from "./callManager.js"
import {default as config} from "../configs/config.js"

(() => { 
    const callManager = new CallManager();     
    const channelsUrl = `${config.channelsEndpoint}?apiKey=${config.apiKey}`;    
    const newsChannelsId = "news-channels";
    const positionToPasteChannel = "afterbegin";
    const template = channelTemplate;

    callManager.doGet(channelsUrl, (data) => {   
        let newsChannel = document.getElementById(newsChannelsId);    
 
        data.sources.sort((first,second) => second.name.localeCompare(first.name)).map(channel =>       
            newsChannel.insertAdjacentHTML(positionToPasteChannel, template(channel)));          
           
    }, (error) => {alert(error)})
})();