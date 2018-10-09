import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule,MatToolbarModule,
  MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule ,MatToolbarModule,MatIconModule
    , MatListModule, MatMenuModule, MatSidenavModule,
    FormsModule
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }
