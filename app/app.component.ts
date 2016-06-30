import {
    Component,
} from "@angular/core";
import {
    Keyboard
} from './Keyboard/keyboard.component';

@Component({
    selector: "calculator",
    template: `
    <GridLayout rows="auto,*" columns="*">
     <!--Dispalyer-->
     <StackLayout row="0" style="font-size:60;color:#fff;height:120;background-color:rgba(0,0,0,0.8);text-align:right;vertical-align:bottom;">
      <Label text="99" ></Label>
     </StackLayout>
     <!--Keyboard-->
     <keyboard row="1" [onKeyBoardClicked]="onKeyBoardClicked"></keyboard>
    </GridLayout>
`,
directives:[Keyboard]
})
export class AppComponent {
    public counter: string = '';
    public onKeyBoardClicked(text:string):void {
        alert(text);
    }
}
