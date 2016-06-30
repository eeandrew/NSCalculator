import {
  Component,
  Input
} from '@angular/core';
import {
  NSButton
} from '../NSButton/nsbutton.component';

@Component({
  selector:'keyboard',
  templateUrl:'Keyboard/keyboard.html',
  styleUrls:['Keyboard/keyboard.css'],
  directives:[NSButton],
})

export class Keyboard{

  @Input('onKeyBoardClicked') onKeyBoardClicked: Function;

  public onBtnClicked(text:string):void {
    this.onKeyBoardClicked && this.onKeyBoardClicked(text);
  }
}