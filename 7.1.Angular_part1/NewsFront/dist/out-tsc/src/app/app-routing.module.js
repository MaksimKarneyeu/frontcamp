import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
var AppRoutes = [
    { path: '', redirectTo: 'news', pathMatch: 'full' },
    { path: 'news', component: ContainerComponent, data: { isLoadNews: true, isLoadNewsDetails: false, isLoadNewsOverview: false } },
    { path: 'details', component: ContainerComponent, data: { isLoadNews: false, isLoadNewsDetails: true, isLoadNewsOverview: false } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(AppRoutes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map