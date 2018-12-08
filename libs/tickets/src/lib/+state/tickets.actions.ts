import { Action } from '@ngrx/store';
import { Entity, Ticket } from './tickets.reducer';

export enum TicketsActionTypes {
  AddEntity = '[Tickets] Add Entity',
  FileUploadError = '[Tickets] File Upload Error',
  FileUploadDone = '[Tickets] File Upload Done',
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

export type TicketsAction = AddEntity | FileUploadError | FileUploadDone;

export const fromTicketsActions = {
  AddEntity,
  FileUploadError,
  FileUploadDone
};
