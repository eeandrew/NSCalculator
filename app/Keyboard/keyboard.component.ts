import {
  Component,
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
}