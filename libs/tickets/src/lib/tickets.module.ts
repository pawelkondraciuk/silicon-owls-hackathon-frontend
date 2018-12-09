import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatBottomSheetModule,
  MatListModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TicketsFacade } from './+state/tickets.facade';
import {
  TICKETS_FEATURE_KEY,
  initialState as ticketsInitialState,
  ticketsReducer
} from './+state/tickets.reducer';
import { TicketsEffects } from './+state/tickets.effects';
import { TicketsComponent } from './tickets.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { StopsComponent } from './components/stops/stops.component';
import { QrCodeComponent } from './components/qr-code/qr-code.component';
import { CarrierContactComponent } from './components/carrier-contact/carrier-contact.component';
import { ConnectionComponent } from './components/connection/connection.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(TICKETS_FEATURE_KEY, ticketsReducer),
    EffectsModule.forFeature([TicketsEffects]),

    FlexLayoutModule,

    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatBadgeModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  providers: [
    TicketsFacade,
  ],
  declarations: [TicketsComponent, TicketComponent, StopsComponent, QrCodeComponent, CarrierContactComponent, ConnectionComponent],
  entryComponents: [QrCodeComponent, CarrierContactComponent],
  exports: [TicketsComponent],
})
export class TicketsModule {}
