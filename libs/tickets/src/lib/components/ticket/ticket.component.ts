import { Component, Input } from '@angular/core';
import { Ticket } from '../../+state/tickets.reducer';

@Component({
  selector: 'owls-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  @Input() ticket: Ticket;
}
