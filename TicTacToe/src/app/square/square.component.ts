import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [
  ]
})

export class SquareComponent {

  //"dumb component" ~ unchanging/not dynamic
  @Input() value!: 'X' | 'O';



}
