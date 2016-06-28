import {Component} from "@angular/core";
import {
    Displayer
} from './Displayer/displayer.component';
import {
  Keyboard
} from './Keyboard/keyboard.component';

@Component({
    selector: "my-app",
    template: `
    <GridLayout rows="auto,*" columns="*">
      <displayer [input]="counter" row="0"></displayer>
      <keyboard row="1"></keyboard>     
    </GridLayout>
`,
directives:[Displayer,Keyboard]
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter += 100;
    }
}
