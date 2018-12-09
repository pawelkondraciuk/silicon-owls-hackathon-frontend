import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map, switchMap } from 'rxjs/operators';
import { TicketsService } from '../services/tickets.service';
import { LoadTickets, TicketsActionTypes, TicketsLoaded, TicketsLoadError } from './tickets.actions';

import { Entity, Ticket, TicketsPartialState } from './tickets.reducer';

@Injectable()
export class TicketsEffects {
  @Effect()
  loadTickets$ = this.dataPersistence.fetch(TicketsActionTypes.LoadTickets, {
    run: (action: LoadTickets, state: TicketsPartialState) => {
      return this.ticketsService.getTickets().pipe(
        map((tickets: Ticket[]) =>
          tickets.map((ticket: Ticket): Entity => ({ ticket }))
        ),
        map((entities: Entity[]) => new TicketsLoaded(entities))
      )
    },

    onError: (action: LoadTickets, error) => {
      console.error('Error', error);
      return new TicketsLoadError();
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TicketsPartialState>,
    private ticketsService: TicketsService,
  ) {}
}
