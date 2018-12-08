import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { TicketsPartialState } from './tickets.reducer';

@Injectable()
export class TicketsEffects {
  // @Effect()
  // loadTickets$ = this.dataPersistence.fetch(TicketsActionTypes.LoadTickets, {
  //   run: (action: LoadTickets, state: TicketsPartialState) => {
  //     // Your custom REST 'load' logic goes here. For now just return an empty list...
  //     return new TicketsLoaded([]);
  //   },
  //
  //   onError: (action: LoadTickets, error) => {
  //     console.error('Error', error);
  //     return new TicketsLoadError(error);
  //   }
  // });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TicketsPartialState>
  ) {}
}
