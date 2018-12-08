import { Component, OnInit } from '@angular/core';
import { TicketsFacade } from './+state/tickets.facade';

@Component({
  selector: 'owls-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(public ticketsFacade: TicketsFacade) { }

  ngOnInit() {
  }

}
