/**
 * Created by will on 09/04/19.
 */
import React from 'react';
import EcosytemHeader from './EcosystemHeader';
import {UserProvider} from '../context/User';

const EcosystemWrapper = ({children}) => {
  return (
    <UserProvider>
    <div>
      <EcosytemHeader/>
      {children}
    </div>
    </UserProvider>
  )
};

export default EcosystemWrapper;