import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
    NSButton
} from '../NSButton/nsbutton.component';

@Component({
  selector:'keyboard',
  templateUrl:'Keyboard/keyboard.html',
  styleUrls:['Keyboard/keyboard.css'],
  directives:[NSButton]
})

export class Keyboard implements OnInit{
  @Input()
  public onKeyBoardClicked: Function;

  public onBtnClicked(text:string) {
    this.onKeyBoardClicked && this.onKeyBoardClicked.call(this,text);
  }

  ngOnInit() {
    this.onBtnClicked = this.onBtnClicked.bind(this);
  }
}