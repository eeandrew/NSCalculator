import {
    Component,
    OnInit
} from "@angular/core";
import {
    Displayer
} from './Displayer/displayer.component';
import {
  Keyboard
} from './Keyboard/keyboard.component';
import {
    NSButton
} from './NSButton/nsbutton.component';

@Component({
    selector: "my-app",
    template: `
    <GridLayout rows="auto,*" columns="*">
      <displayer [input]="counter" row="0"></displayer>
      <keyboard row="1" [onKeyBoardClicked]="onKeyBoardClicked"></keyboard>  
    </GridLayout>
`,
directives:[Displayer,Keyboard,NSButton]
})
export class AppComponent implements OnInit{
    public counter: string = '';
    public onKeyBoardClicked(text:string) {
        switch(text.toLowerCase()) {
          case 'c' :
            this.counter = '';
          break;
          default:
            this.counter += text;
          break;
        }
        console.log(this.counter);
    }
    ngOnInit() {
        this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
    }
}
