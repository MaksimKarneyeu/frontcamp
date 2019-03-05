import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { OverviewContainerComponent } from './overview-container/overview-container.component';


const AppRoutes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'news', component: ContainerComponent },
  { path: 'edit/:id', component: DetailsContainerComponent },
  { path: 'create', component: DetailsContainerComponent },
  { path: 'news/:id', component: OverviewContainerComponent } 
];  

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
