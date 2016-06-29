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
  template: `<Label class="keyboard-item" #nsbutton [text]="text" (touch)="onTouch($event)"> </Label>`,
  styleUrls:['NSButton/nsbutton.css']
})

export class NSButton implements AfterViewInit{
  @ViewChild('nsbutton') nsBtnRef : ElementRef;
  @Input('text') text: string;
  @Input('normalBg') normalBg:string;
  @Input('activeBg') activeBg:string;
  private nsBtnView : Label;

  ngAfterViewInit() {
    this.nsBtnView = <Label> this.nsBtnRef.nativeElement;
    this.changeBg(this.nsBtnView,this.normalBg || '#D0D0D0');
  }

  changeBg(component:Label,bgColor:string) {
    component.backgroundColor = new Color(bgColor);
  }

  onTouch(event) {
    this.onTouchEvent(event.action);
  }

  onTouchEvent(type:string) {
    switch(type) {
      case 'down':
      case 'move':
        this.changeBg(this.nsBtnView,this.activeBg || '#A3A3A3');
      break;
      default:
        this.changeBg(this.nsBtnView,this.normalBg || '#D0D0D0');
      break;
    }
  }
}