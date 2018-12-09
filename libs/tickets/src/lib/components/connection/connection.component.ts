import { Component, Input } from '@angular/core';
import { Ticket } from '@owls/tickets';

@Component({
  selector: 'owls-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {
  @Input() ticket: Ticket;

  get isLate() {
    return this.ticket.connection_current_info.status !== 'Na czas'
  }

  get carInfo() {
    const carNumber = this.ticket.car_number;
    const carMappingKey = this.ticket.car_info.car_mapping[carNumber];
    return this.ticket.car_info.cars[carMappingKey];
  }
}
