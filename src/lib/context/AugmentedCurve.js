/**
 * Created by will on 11/04/19.
 */
import React from 'react';
import {reducer, initialState} from '../state/augmentedCurveState';

// TODO Define default curve context
const AugmentedCurveContext = React.createContext();

export function AugmentedCurveProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <AugmentedCurveContext.Provider value={value}>
    {children}
  </AugmentedCurveContext.Provider>
}

export default AugmentedCurveContext;