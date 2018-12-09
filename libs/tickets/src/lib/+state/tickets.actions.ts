import { Action } from '@ngrx/store';
import { Entity, Ticket } from './tickets.reducer';

export enum TicketsActionTypes {
  LoadTickets = '[Tickets] Load Tickets',
  TicketsLoaded = '[Tickets] Tickets Loaded',
  TicketsLoadError = '[Tickets] Tickets Load Error',
  AddEntity = '[Tickets] Add Entity',
  FileUploadError = '[Tickets] File Upload Error',
  FileUploadDone = '[Tickets] File Upload Done',
}

export class LoadTickets implements Action {
  readonly type = TicketsActionTypes.LoadTickets;
}

export class TicketsLoaded implements Action {
  readonly type = TicketsActionTypes.TicketsLoaded;

  constructor(public payload: Entity[]) { }
}

export class TicketsLoadError implements Action {
  readonly type = TicketsActionTypes.TicketsLoadError;
}

export class AddEntity implements Action {
  readonly type = TicketsActionTypes.AddEntity;

  constructor(public payload: { entity: Entity }) {}
}

export class FileUploadError implements Action {
  readonly type = TicketsActionTypes.FileUploadError;

  constructor(public payload: { entity: Entity }) {}
}

export class FileUploadDone implements Action {
  readonly type = TicketsActionTypes.FileUploadDone;

  constructor(public payload: { entity: Entity }) {}
}

export type TicketsAction = AddEntity | FileUploadError | FileUploadDone | LoadTickets | TicketsLoaded | TicketsLoadError;

export const fromTicketsActions = {
  LoadTickets,
  TicketsLoaded,
  TicketsLoadError,
  AddEntity,
  FileUploadError,
  FileUploadDone,
};
