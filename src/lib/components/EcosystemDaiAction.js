/**
 * Created by will on 10/04/19.
 */
import React from 'react';
import {userActions} from '../state/userState';

import UserContext from '../context/User';

const EcosystemDaiAction = ({buttonName, actionText}) => {
  const {state, dispatch} = React.useContext(UserContext);
  const spendFunds = () => dispatch({type: userActions.spend, amount: 5000});

  return (
    <div className="eco-dai-action">
      <button className="eco primary" onClick={spendFunds}>{buttonName}</button>
      <p>{actionText}</p>
    </div>
  );
}

export default EcosystemDaiAction;
