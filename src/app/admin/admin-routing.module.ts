import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
     path: '',
     component: AdminComponent,
     children: [
        {
            path: '',
            redirectTo: 'dashboard'
        },
        {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
        {
            path: 'button',
            loadChildren: './button/button.module#ButtonModule'
        },
        {
            path: 'panel',
            loadChildren: './panel/panel.module#PanelModule'
        },
        {
            path: 'portlet',
            loadChildren: './portlet/portlet.module#PortletModule'
        },
        {
            path: 'models',
            loadChildren: './models/models.module#ModelsModule'
        }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
