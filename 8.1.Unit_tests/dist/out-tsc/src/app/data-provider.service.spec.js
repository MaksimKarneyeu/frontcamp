import { TestBed } from '@angular/core/testing';
import { DataProviderService } from './data-provider.service';
describe('DataProviderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DataProviderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data-provider.service.spec.js.map