import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule,MatToolbarModule,
  MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortletRoutingModule } from './portlet-routing.module';
import { PortletComponent } from './portlet.component';

import { ToggleDirective } from '../../directive/toggle.directive';
import { DragulaModule } from 'ng2-dragula';
@NgModule({
  imports: [
    CommonModule,
    PortletRoutingModule,
    MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule ,MatToolbarModule,MatIconModule
    , MatListModule, MatMenuModule, MatSidenavModule,
    DragulaModule.forRoot()
  ],
  declarations: [PortletComponent, ToggleDirective]
})
export class PortletModule { }
