import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Ticket } from '../../+state/tickets.reducer';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  selector: 'owls-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  @Input() ticket: Ticket;

  constructor(private dialog: MatDialog) { }

  showQrCode() {
    this.dialog.open(QrCodeComponent, {
      data: { qrCode: this.ticket.qr_code }
    });
  }
}
