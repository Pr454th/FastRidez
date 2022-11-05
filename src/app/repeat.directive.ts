import { Directive,TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  exportAs:'repeat1,repeat2'
})
export class RepeatDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
    flag:boolean=false;
    printRepeat(count: number) {
      for (let i = 0; i < count; i++) {
        if(!this.flag)
        this.viewContainer.createEmbeddedView(this.templateRef);
        else{
          document.getElementsByTagName('p')[i].innerHTML="repeat";
        }
      }
    }
    changeRepeat(count:number)
    {
      for(let i=0;i<count;i++)
      {
        document.getElementsByTagName('p')[i].innerHTML="changed";
        this.flag=true;
      }
    }
}

// import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
// @Directive({
//   selector: '[appRepeat]'
// })
// export class RepeatDirective {
  // appRepeat(count: number) {
  //   for (let i = 0; i < count; i++) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   }
  // }
// }
