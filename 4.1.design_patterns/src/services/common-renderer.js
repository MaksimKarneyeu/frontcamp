export default class CommonRenderer {    
    draw(element, template) {
        element.innerHTML += template;
    }
}