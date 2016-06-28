import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Input,
  OnInit
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
  template: `<Label class="{{classNames}}" [ngClass]="setActiveClass()" #nsbutton [text]="text" (touch)="onTouch($event)"> </Label>`,
})

export class NSButton implements AfterViewInit,OnInit{
  @ViewChild('nsbutton') nsBtnRef : ElementRef;
  @Input('text') text: string;
  @Input('classNames') classNames: string;
  @Input('normalBg') normalBg:string;
  @Input('activeBg') activeBg:string;
  @Input('onBtnClicked')  onBtnClicked: Function;
  private nsBtnView : Label;
  active: boolean = false;
  ngAfterViewInit() {
    this.active = false;
    this.nsBtnView = <Label> this.nsBtnRef.nativeElement;
  }

  //TODO: Make sure ngClass doesn't work on Nativescript
  setActiveClass() {
    let classes = {
      active: this.active
    }
    return classes;
  }

  changeBg(component:Label,bgColor:string) {
    component.backgroundColor = new Color(bgColor);
  }

  onKeyUp() {
   this.onBtnClicked && this.onBtnClicked.call(this,this.text);
  }

  ngOnInit() {
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onTouchEvent = this.onTouchEvent.bind(this);
  }

  onTouch(event) {
    console.log(event.action);
    this.onTouchEvent(event.action);
  }

  onTouchEvent(type:string) {
    switch(type) {
      case 'down':
      case 'move':
        this.active = true;
        this.changeBg(this.nsBtnView,this.activeBg || 'A3A3A3');
      break;
      case 'up':
        this.onKeyUp()
      default:
        this.changeBg(this.nsBtnView,this.normalBg || 'D0D0D0');
        this.active = false;
      break;
    }
  }
}