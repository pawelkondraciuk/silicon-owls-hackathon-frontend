import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTicketsActions } from './tickets.actions';
import { Entity, Ticket, TicketsState } from './tickets.reducer';
import { ticketsQuery } from './tickets.selectors';

@Injectable()
export class TicketsFacade {
  allEntities$ = this.store.select(ticketsQuery.getAllEntities);
  totalEntities$ = this.store.select(ticketsQuery.getTotalEntities);
  loaded$ = this.store.select(ticketsQuery.getLoaded);

  constructor(private store: Store<TicketsState>) {}

  loadTickets() {
    this.store.dispatch(new fromTicketsActions.LoadTickets());
  }

  addEntity(entity: Entity) {
    this.store.dispatch(new fromTicketsActions.AddEntity({entity}));
  }

  fileUploadError(entity: Entity) {
    this.store.dispatch(new fromTicketsActions.FileUploadError({entity}));
  }

  fileUploadDone(entity: Entity) {
    this.store.dispatch(new fromTicketsActions.FileUploadDone({entity}));
  }
}
