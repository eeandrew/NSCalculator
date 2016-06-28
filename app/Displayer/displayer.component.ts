import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import {
  device,
  platformNames
} from 'platform';

import {
  Label,
} from 'ui/label';

@Component({
  selector: 'displayer',
  template: `
    <StackLayout class="stacklayout">
      <Label #displayer class="displayer large" [text]="input"></Label>
    </StackLayout>
  `,
  styleUrls:['Displayer/displayer.css']
})

export class Displayer implements AfterViewInit{
  @Input('input') input: string;
  @ViewChild('displayer') displayerRef: ElementRef;
  private displayer: Label;

  ngAfterViewInit() {
    this.displayer = this.displayerRef.nativeElement;
    this.setIOSLabelAutoFont(this.displayer);
  }

  setIOSLabelAutoFont(elem: Label) {
    if(device.os === platformNames.ios){
      elem.ios.numberOfLines = 1;
      elem.ios.minimumFontSize = 20;
      elem.ios.adjustsFontSizeToFitWidth = true;
    }
  }

}