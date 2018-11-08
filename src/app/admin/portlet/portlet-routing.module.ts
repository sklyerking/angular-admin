import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortletComponent } from './portlet.component';


const routes: Routes = [
  {
    path:'',
    component:PortletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortletRoutingModule { }
