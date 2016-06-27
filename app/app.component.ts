import {Component} from "@angular/core";
import {
    Displayer
} from './Displayer/displayer.component'

@Component({
    selector: "my-app",
    template: `
    <GridLayout rows="auto,*" columns="*">
      <displayer [input]="counter" row="0"></displayer> 
      <Button text="TAP" (tap)="onTap()" row="1"></Button>
    </GridLayout>
`,
directives:[Displayer]
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
