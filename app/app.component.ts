import {
	Component,
	OnInit,
} from "@angular/core";

import {
  Keyboard
} from './Keyboard/keyboard.component';
import {
	Displayer
} from './Displayer/displayer.component';
@Component({
	selector: "calculator",
	template: `
			<GridLayout rows="auto,*" columns="*">
			<!--Displayer-->
			<displayer [input]="counter" row="0"></displayer>
			<!--Keyboard-->
			<keyboard row="1" [onKeyBoardClicked]="onKeyBoardClicked"></keyboard>
			</GridLayout>
	`,
	directives:[Keyboard,Displayer]
})
export class AppComponent implements OnInit{
	public counter: string = '';

	ngOnInit() {
			this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
	}

	public onKeyBoardClicked(text:string):void {
			switch(text.toUpperCase()) {
				case 'C' :
					this.counter = '';
					break;
				default:
					this.counter += text;        
			}
	}
}
