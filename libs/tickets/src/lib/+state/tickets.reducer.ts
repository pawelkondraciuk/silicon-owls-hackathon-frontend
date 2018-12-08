import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { TicketsAction, TicketsActionTypes } from './tickets.actions';

export const TICKETS_FEATURE_KEY = 'tickets';

/**
 * Interface for the 'Tickets' data used in
 *  - TicketsState, and
 *  - ticketsReducer
 *
 *  Note: replace if already defined in another module
 */

export enum FILE_STATE {
  INPROGRESS = 'in progress',
  ERROR = 'error',
  DONE = 'done'
}


/* tslint:disable:no-empty-interface */
export interface Ticket {
  id:            number;
  tickets:       string[];
  purchase_date: string;
  carrier:       string;
  start_time:    string;
  finish_time:   string;
  start_place:   string;
  finish_place:  string;
  class:         string;
  stops:         string[];
  cost:          string;
  seats:         string[];
  train_number:  string;
  car_number:    string;
  total_length:  string;
}

export interface Entity {
  file?: File;
  ticket?: Ticket;
}

export interface File {
  id:             number;
  name:           string;
  state:          FILE_STATE;
}

export interface TicketsState extends EntityState<Entity> {

}

export interface TicketsPartialState {
  readonly [TICKETS_FEATURE_KEY]: TicketsState;
}

export const adapter: EntityAdapter<Entity> = createEntityAdapter<Entity>({
  selectId: model => model.ticket ? model.ticket.id : model.file.id
});

export const initialState: TicketsState = adapter.getInitialState({

});

export function ticketsReducer(
  state: TicketsState = initialState,
  action: TicketsAction
): TicketsState {
  switch (action.type) {
    case TicketsActionTypes.AddEntity: {
      return adapter.addOne(action.payload.entity, state);
    }
    case TicketsActionTypes.FileUploadError: {
      return adapter.updateOne({
        id: action.payload.entity.file.id,
        changes: {
          file: action.payload.entity.file
        }
      }, state);
    }
    case TicketsActionTypes.FileUploadDone: {
      return adapter.updateOne({
        id: action.payload.entity.file.id,
        changes: {
          file: action.payload.entity.file,
          ticket: action.payload.entity.ticket
        }
      }, state);
    }
  }
  return state;
}

const { selectAll, selectTotal } = adapter.getSelectors();

export {
  selectAll,
  selectTotal
}
