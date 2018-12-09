import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from '@owls/tickets';

@Component({
  selector: 'owls-carrier-contact',
  templateUrl: './carrier-contact.component.html',
  styleUrls: ['./carrier-contact.component.scss']
})
export class CarrierContactComponent {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public ticket: Ticket,
    private sanitizer: DomSanitizer
  ) { }

  get carrierContactLink() {
    return this.sanitizer.bypassSecurityTrustUrl(`tel:${this.ticket.carrier_contact_phone}`)
  }
}
