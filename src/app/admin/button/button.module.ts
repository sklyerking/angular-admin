import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule,MatToolbarModule,
  MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonRoutingModule,
    MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule ,MatToolbarModule,MatIconModule
    , MatListModule, MatMenuModule, MatSidenavModule,
    FormsModule
  ],
  declarations: [ButtonComponent]
})
export class ButtonModule { }
