import {Source} from "./source";

export class News{
    public source: Source;
    public author: string;
    public description: string;
    public url: string;
    public urlToImage: string;
    public publishedAt: Date;
    public content: string; 

    constructor(id: string, name: string) {
        this.source = new Source(id,name);        
     }
}