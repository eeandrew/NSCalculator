import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnChanges,
  SimpleChange
} from '@angular/core';

import {
  device,
  platformNames
} from 'platform';

import {
  Label,
} from 'ui/label';

import {
  StackLayout
} from 'ui/layouts/stack-layout';

@Component({
  selector: 'displayer',
  template: `
    <StackLayout class="stacklayout" row="0" #wrapper>
      <Label #displayer class="displayer large" [text]="input"></Label>
    </StackLayout>
  `,
  styleUrls:['Displayer/displayer.css']
})

export class Displayer implements AfterViewInit,OnChanges{
  @Input('input') input: string;
  @ViewChild('displayer') displayerRef: ElementRef;
  @ViewChild('wrapper') wrapperRef: ElementRef;
  private displayer: Label;
  private wrapper: StackLayout;
  private static MAX_FONT:number = 60;
  private static MIN_FONT:number = 20;
  private currentFont: number = Displayer.MAX_FONT;
  ngAfterViewInit() {
    this.displayer = this.displayerRef.nativeElement;
    this.wrapper = this.wrapperRef.nativeElement;
    this.setIOSLabelAutoFont(this.displayer);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    //Android Only
    if(device.os !== platformNames.android) return;
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log('current ' + cur + ' previous ' + prev);
      if(this.displayer && this.wrapper) {
       let paint:any = this.displayer.android.getPaint();
       let textWidth:number = paint.measureText(cur);
       let wrapperWidth:number = this.wrapper.android.getWidth();
       if(Math.abs(wrapperWidth - textWidth) < 50 && this.currentFont > Displayer.MIN_FONT) {
          this.currentFont -= 10;
       }
       if(Math.abs(wrapperWidth - textWidth) > wrapperWidth / 2) {
         this.currentFont = Displayer.MAX_FONT;
       }
      this.displayer.android.setTextSize(this.currentFont);
      }
    }
  }

  setIOSLabelAutoFont(elem: Label) {
    if(device.os === platformNames.ios){
      elem.ios.numberOfLines = 1;
      elem.ios.minimumFontSize = Displayer.MIN_FONT;
      elem.ios.adjustsFontSizeToFitWidth = true;
    }
  }




}