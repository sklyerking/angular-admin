import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CommonService} from '../services/common.service';

@Directive({
  selector: '[sky-toggle]'
})
export class ToggleDirective {

  constructor(private el: ElementRef, private commonservice: CommonService) { }

  @Input() toggleConfig: any;

  public  toggleOptions:any = {};
  @HostListener('click') onClick() {

    this.toggleConfig=(this.toggleConfig.includes('['))?this.toggleConfig.substring(1, this.toggleConfig.length):this.toggleConfig;
    this.toggleConfig=(this.toggleConfig.includes(']'))?this.toggleConfig.substring(0, this.toggleConfig.length-1):this.toggleConfig;

    var options=this.toggleConfig.split(',');
    if(options){
      if(options.length>0){
        for(var i=0;i<options.length;i++){
          var valArr=options[i].split('=');
          if(valArr){
              if(valArr[0]==='id'){
                this.toggleOptions.id=valArr[1];
              }else if(valArr[0]==='btnClass'){
                this.toggleOptions.btnClass=valArr[1];
              }

          }
        }
      }
        this.highlight()
    }

  }



  private highlight() {
    //console.log(this.toggleOptions);
    const dom: any = document.querySelector('#'+this.toggleOptions.id);
    const dom2: any = document.querySelector('.'+this.toggleOptions.btnClass);
    if(dom.classList.contains('hide')){
      dom.classList.remove('hide');
      dom2.classList.remove('fa-plus');
      dom2.classList.add('fa-minus');
    }else{
      dom.classList.add('hide');
      dom2.classList.remove('fa-minus');
      dom2.classList.add('fa-plus');
    }
    //this.el.nativeElement.style.backgroundColor = color;
  }

}
