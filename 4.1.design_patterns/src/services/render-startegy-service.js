export default class RenderStrategyService{
    constructor(renderer){
       this.renderer = renderer; 
    }
     
    render(element, template){
        this.renderer.draw(element, template);      
    }
}