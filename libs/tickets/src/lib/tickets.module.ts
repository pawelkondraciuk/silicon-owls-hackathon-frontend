import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material';
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

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TICKETS_FEATURE_KEY, ticketsReducer, {
      initialState: ticketsInitialState
    }),
    EffectsModule.forFeature([TicketsEffects]),

    MatExpansionModule,
  ],
  providers: [
    TicketsFacade,
  ],
  declarations: [TicketsComponent, TicketComponent],
  exports: [TicketsComponent],
})
export class TicketsModule {}
