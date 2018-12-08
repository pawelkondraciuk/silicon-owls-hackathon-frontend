import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TicketsState, selectAll, selectTotal } from './tickets.reducer';

const getTicketsState = createFeatureSelector<TicketsState>('tickets');

const getAllEntities = createSelector(
  getTicketsState,
  selectAll,
);

const getTotalEntities = createSelector(
  getTicketsState,
  selectTotal,
);

export const ticketsQuery = {
  getAllEntities,
  getTotalEntities,
};
