import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '@owls/tickets';

@Component({
  selector: 'owls-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.scss']
})
export class StopsComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit() {
  }

}
