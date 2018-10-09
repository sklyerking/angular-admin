import { Component, OnInit } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  constructor(private mScrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
    this.mScrollbarService.initScrollbar('#sidebar', { axis: 'y', theme: 'minimal-dark' });
  }
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  showMenu: string = '';
  addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
