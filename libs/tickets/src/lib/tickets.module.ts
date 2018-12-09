import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatExpansionModule } from '@angular/material';
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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(TICKETS_FEATURE_KEY, ticketsReducer),
    EffectsModule.forFeature([TicketsEffects]),

    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    TicketsFacade,
  ],
  declarations: [TicketsComponent, TicketComponent, StopsComponent, QrCodeComponent],
  entryComponents: [QrCodeComponent],
  exports: [TicketsComponent],
})
export class TicketsModule {}
