import { News } from './news';
import { CallService } from "./call.service";
import { Injectable } from '@angular/core';
import { DataProviderService } from './data-provider.service';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class DataServiceStub extends DataService {
    private testData: News[];
    constructor(protected callService: CallService, protected dataProvider: DataProviderService, testData: News[]) {
        super(callService, dataProvider);
        this.testData = testData;
        this.data = this.initData();
    }

    protected initData(): News[] {
        return this.testData;
    }
}