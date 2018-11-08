import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelsRoutingModule } from './models-routing.module';
import { ModelsComponent } from './models.component';
import { DefaultDialog ,SetwidthheightDialog, HeaderDialog,ActionDialog, DataDialog, GetdataDialog
} from './models.component';
import { ModalModule } from 'ngx-bootstrap';

import {MatCardModule,MatDialogModule, MatInputModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ModelsRoutingModule,MatDialogModule,MatInputModule,
    ModalModule.forRoot(),
    MatCardModule,
    FormsModule
  ],
  declarations: [ModelsComponent,DefaultDialog,SetwidthheightDialog,HeaderDialog,ActionDialog, DataDialog, GetdataDialog

  ],
  providers: [],
  entryComponents: [DefaultDialog,SetwidthheightDialog,HeaderDialog,ActionDialog, DataDialog, GetdataDialog
  ]
})
export class ModelsModule { }
