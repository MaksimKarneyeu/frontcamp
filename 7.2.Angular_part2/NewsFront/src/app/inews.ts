import {Source} from "./source";

export interface INews {
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
}
