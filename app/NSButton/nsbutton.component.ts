import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input
} from '@angular/core';
import {
  Label
} from 'ui/label';
import {
  GestureTypes,
  TouchGestureEventData
} from 'ui/gestures';
import {
  Color
} from 'color';
@Component({
  selector: 'nsbutton',
  template: `<Label class="{{classNames}}" [ngClass]="setActiveClass()" #nsbutton [text]="text"> </Label>`,
})

export class NSButton implements AfterViewInit{
  @ViewChild('nsbutton') nsBtnRef : ElementRef;
  @Input('text') text: string;
  @Input('classNames') classNames: string;
  @Input('normalBg') normalBg;
  @Input('activeBg') activeBg;
  private nsBtnView : Label;
  active: boolean = false;
  ngAfterViewInit() {
    this.active = false;
    this.nsBtnView = <Label> this.nsBtnRef.nativeElement;
    //this.nsBtnView.on(GestureTypes.touch,function(){alert('touch start')});
    this.nsBtnView.on(GestureTypes.touch,(args:TouchGestureEventData) =>{
      console.log(JSON.stringify(args.action));
      this.onTouchEvent(args.action.toLowerCase());
      console.log(this.active);
    });
  }

  setActiveClass() {
    let classes = {
      active: this.active
    }
    return classes;
  }

  onTouchEvent(type:string) {
    switch(type) {
      case 'down':
      case 'move':
      this.active = true;
      this.nsBtnView.backgroundColor = new Color(this.activeBg || '#A3A3A3');
      break;
      default:
      this.nsBtnView.backgroundColor = new Color(this.normalBg || '#D0D0D0');
      this.active = false;
      break;
    }
  }
}