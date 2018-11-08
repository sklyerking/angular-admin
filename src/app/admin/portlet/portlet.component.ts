import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
@Component({
  selector: 'app-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.css']
})
export class PortletComponent implements OnInit {

  vamps = [
    { name: "Bad Vamp" },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];
  vamps2 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];
  constructor(private dragulaService: DragulaService) {
    if(this.dragulaService.find("MYVAMPIRES")===undefined){
      this.dragulaService.createGroup("MYVAMPIRES", {
        // removeOnSpill: true Remove if drop out side
      });
    }
    //console.log(this.dragulaService.find("MYVAMPIRES"));

    this.dragulaService.dropModel("MYVAMPIRES").subscribe(args => {
      console.log(args);
    });
  }



  ngOnInit() {
  }


}
