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
  GridLayout
} from 'ui/layouts/grid-layout';
import {
  GestureTypes,
  TouchGestureEventData
} from 'ui/gestures';
import {
  Color
} from 'color';
@Component({
  selector: 'nsbutton',
  template: `<GridLayout class="keyboard-item" #nsbutton (touch)="onTouch($event)"><Label  [text]="text" > </Label><GridLayout>`,
  styleUrls:['NSButton/nsbutton.css']
})

export class NSButton implements AfterViewInit{
  @ViewChild('nsbutton') nsBtnRef : ElementRef;
  @Input('text') text: string;
  @Input('normalBg') normalBg:string;
  @Input('activeBg') activeBg:string;
  @Input('onBtnClicked') onBtnClicked: Function;
  private nsBtnView : GridLayout;

  ngAfterViewInit() {
    this.nsBtnView = <GridLayout> this.nsBtnRef.nativeElement;
    this.changeBg(this.nsBtnView,this.normalBg || '#D0D0D0');
  }

  changeBg(component:GridLayout,bgColor:string) {
    component.backgroundColor = new Color(bgColor);
  }

  onTouch(event) {
    this.onTouchEvent(event.action);
  }

  onKeyUp() {
    if(this.onBtnClicked) {
      this.onBtnClicked && this.onBtnClicked(this.text);
    }
  }

  onTouchEvent(type:string) {
    switch(type) {
      case 'down':
      case 'move':
        this.changeBg(this.nsBtnView,this.activeBg || '#A3A3A3');
      break;
      case 'up':
        this.onKeyUp();
      default:
        this.changeBg(this.nsBtnView,this.normalBg || '#D0D0D0');
      break;
    }
  }
}