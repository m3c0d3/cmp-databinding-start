import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // this is the default
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {
    type: string, name: string,
    content: string
  };
  @Input() name: string;

  constructor() {
    console.log('construnctor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

}
