import { Component, Input } from '@angular/core';
import { MatDialog, MatBottomSheet } from '@angular/material';
import { Ticket } from '../../+state/tickets.reducer';
import { API_BASE } from '../../services/tickets.service';
import { CarrierContactComponent } from '../carrier-contact/carrier-contact.component';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  selector: 'owls-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  @Input() ticket: Ticket;

  constructor(
    private dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) { }

  showQrCode() {
    this.dialog.open(QrCodeComponent, {
      data: { qrCode: this.ticket.qr_code }
    });
  }

  showCarrierContact() {
    this.bottomSheet.open(CarrierContactComponent, {
      data: this.ticket
    })
  }

  get calendarLink() {
    return `${API_BASE}/ticket/ics/${this.ticket.id}/`;
  }
}
