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

const getLoaded = createSelector(
  getTicketsState,
  (state) => state.loaded,
)

export const ticketsQuery = {
  getAllEntities,
  getTotalEntities,
  getLoaded,
};
