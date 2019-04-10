/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import {reducer, initialState} from '../state/userState';

const UserContext = React.createContext();

export function UserProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch};
  return <UserContext.Provider value={value}>
    {props.children}
  </UserContext.Provider>
}

export default UserContext;