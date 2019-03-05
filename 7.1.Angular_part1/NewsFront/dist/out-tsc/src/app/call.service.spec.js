import { TestBed } from '@angular/core/testing';
import { CallService } from './call.service';
describe('CallService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CallService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=call.service.spec.js.map