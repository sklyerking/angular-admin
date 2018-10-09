import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  leftsideBarShow=false;
  pushRightClass: string = 'push-right';
  constructor(public router: Router) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                //this.toggleSidebar();
                this.leftsideBarShow=true;
            }
        });
    }

  ngOnInit() {
    console.log(this.leftsideBarShow);
  }

  isToggled(): boolean {
        const dom: Element = document.querySelector('#sidebar');
        return dom.classList.contains(this.pushRightClass);
    }

  toggleSidebar() {
    const dom: any = document.querySelector('#sidebar');

    if(this.leftsideBarShow){
      dom.classList.remove('fadeInLeft');
      dom.classList.add('fadeInRight');
      dom.classList.remove('push-right');
      this.leftsideBarShow=false;
    }
    else{
      dom.classList.remove('fadeInRight');
      dom.classList.add('fadeInLeft');
      dom.classList.add('push-right'); this.leftsideBarShow=true;
  }


      // dom.classList.toggle(this.pushRightClass);
   }

   onLoggedout() {
       localStorage.removeItem('isLoggedin');
       //this.router.navigate(['/login']);
   }

}
