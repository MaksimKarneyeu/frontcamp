import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';


const AppRoutes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'news', component: ContainerComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
