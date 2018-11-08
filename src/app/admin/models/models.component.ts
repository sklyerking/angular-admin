import { Component, OnInit,ViewChild , Inject } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal:'panda' | 'unicorn' | 'lion';
}

export interface DialogData2 {
  animal: string;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,public dialog: MatDialog) { }
  ngOnInit() {
  }
  // Bootstrap Model
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown: boolean = false;
  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
  }

  // Material dailog
  defaultDialog() {
    const dialogRef = this.dialog.open(DefaultDialog);
  }

  setWidthHeightDialog() {
    const dialogRef = this.dialog.open(SetwidthheightDialog, {
      height: '400px',
      width: '600px',
    });
  }

  headerDialog() {
    const dialogRef = this.dialog.open(HeaderDialog);
  }

  actionDialog() {
    const dialogRef = this.dialog.open(ActionDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result===false){
        alert("Dailog Cancel");
      }
      else if(result===true){
        alert("Dailog Success");
      }
      console.log(result);
    });
  }
  dialogDyn = "unicorn";
  dataDialog() {
    const dialogRef = this.dialog.open(DataDialog, {
      height: '300px',
      width: '600px',
      data : {
        animal :this.dialogDyn
      }
    });
  }
  animal: string;
  getdataDialog() {
    const dialogRef = this.dialog.open(GetdataDialog, {
      data : {
        animal :this.animal
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result===false){}
      else{
        this.animal = result;
      }

    });

  }
}


@Component({
  selector: 'default-dialog',
  templateUrl: 'material-pages/default.html',
})
export class DefaultDialog {}

@Component({
  selector: 'setwidthheight-dialog',
  templateUrl: 'material-pages/default.html',
})
export class SetwidthheightDialog {}

@Component({
  selector: 'header-dialog',
  templateUrl: 'material-pages/withheader.html',
})
export class HeaderDialog {}

@Component({
  selector: 'action-dialog',
  templateUrl: 'material-pages/withaction.html',
})
export class ActionDialog {}

@Component({
  selector: 'data-dialog',
  templateUrl: 'material-pages/withdata.html',
})
export class DataDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  selector: 'getdata-dialog',
  templateUrl: 'material-pages/getdata.html',
})
export class GetdataDialog {
  constructor(
    public dialogRef: MatDialogRef<GetdataDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData2) {}
}
