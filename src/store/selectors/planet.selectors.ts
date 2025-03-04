import { createSelector, createFeatureSelector } from '@ngrx/store';
import {PlanetState} from "../types";


export const selectPlanetState = createFeatureSelector<PlanetState>('planets');


export const selectAllPlanets = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.planets
);


export const selectPlanetsLoading = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.loading
);


export const selectPlanetsError = createSelector(
  selectPlanetState,
  (state: PlanetState) => state.error
);
