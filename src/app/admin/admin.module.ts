import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule,MatToolbarModule,
  MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TopnavComponent } from './includes/topnav/topnav.component';
import { LeftnavComponent } from './includes/leftnav/leftnav.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule ,MatToolbarModule,MatIconModule
    , MatListModule, MatMenuModule, MatSidenavModule,
    FormsModule
  ],
  declarations: [AdminComponent, TopnavComponent, LeftnavComponent]
})
export class AdminModule { }
