import { Source } from "./source";
import { INews } from './inews';

export class News implements INews {
    source: Source;
    author: string;
    description: string;
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
    isExternal: boolean;
    imageBase64: ArrayBuffer | String;

    constructor(id: string, name: string) {
        this.source = new Source(id, name);
    }
}