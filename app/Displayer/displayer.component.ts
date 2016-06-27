import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'displayer',
  template: `
    <StackLayout class="stacklayout">
      <Label class="displayer large" [text]="input"></Label>
    </StackLayout>
  `,
  styleUrls:['Displayer/displayer.css']
})

export class Displayer {
  @Input('input') input: number;
}