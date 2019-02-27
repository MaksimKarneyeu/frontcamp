import { News } from './news';

declare module jasmine {
    interface Matchers {
        hasNoFilteredResults(actual: News[]): boolean;
    }
}