import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {

  @Input() aberto: boolean;
  @Input() titulo: string;
  @Input() acoes: Object[];
  constructor() { }

  ngOnInit() {
  }

}
