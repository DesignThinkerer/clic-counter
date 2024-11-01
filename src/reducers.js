/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';

import homeContainerReducer from './containers/HomeContainer/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    // language: languageProviderReducer,
    // global: globalReducer,
    homeContainer: homeContainerReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
