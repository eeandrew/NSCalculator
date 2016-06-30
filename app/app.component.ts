import {
	Component,
	OnInit,
	ElementRef,
	ViewChild,
	AfterViewInit,
} from "@angular/core";
import {
	Label
} from 'ui/label';
import {
  Keyboard
} from './Keyboard/keyboard.component';
import {
  device,
  platformNames
} from 'platform';

@Component({
	selector: "calculator",
	template: `
			<GridLayout rows="auto,*" columns="*">
			<!--Dispalyer-->
			<StackLayout row="0" style="font-size:60;color:#fff;height:120;background-color:rgba(0,0,0,0.8);text-align:right;vertical-align:bottom;">
				<Label [text]="counter" #displayer></Label>
			</StackLayout>
			<!--Keyboard-->
			<keyboard row="1" [onKeyBoardClicked]="onKeyBoardClicked"></keyboard>
			</GridLayout>
	`,
	directives:[Keyboard]
})
export class AppComponent implements OnInit, AfterViewInit{
	public counter: string = '';
	@ViewChild('displayer') displayerRef: ElementRef;
	private displayerView : Label;

	ngAfterViewInit() {
		this.displayerView = <Label> this.displayerRef.nativeElement;
		this.setIOSLabelAutoFont(this.displayerView);
	}

	private setIOSLabelAutoFont(elem: Label) {
    if(device.os === platformNames.ios){
      elem.ios.numberOfLines = 1;
      elem.ios.minimumFontSize = 20;
      elem.ios.adjustsFontSizeToFitWidth = true;
    }
  }

	ngOnInit() {
			this.onKeyBoardClicked = this.onKeyBoardClicked.bind(this);
	}

	public onKeyBoardClicked(text:string):void {
			this.counter += text;        
	}
}
