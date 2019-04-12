/**
 * Created by will on 10/04/19.
 */
import React from 'react';
import EcosystemDaiAction from './EcosystemDaiAction';
import Givethers from './Givethers';
import UserContext from '../context/User';
import {userActions} from '../state/userState';
import PrimaryButton from './PrimaryButton';

const EcosystemHeader = () => {
  const {state, dispatch} = React.useContext(UserContext);
  const loginUser = () => dispatch({type: userActions.login, user: {name: "WILL", totalBalance: 500000}});

  return (
    <div className="eco-header">
      <div className="login">
        {state.user ? <div><h1>{state.user.name}</h1><h2>{state.user.totalBalance}</h2></div>  : <PrimaryButton name="Login" onClick={loginUser}/>}

      </div>
      <div className="eco-header-content">

        <h3>CAMPAIGN</h3>


        <h1>Planting seeds in South Indonesian Forests</h1>
        <div className="row">
          <EcosystemDaiAction buttonName="Donate DAI" actionText="1510 DAI Donated"/>
          <EcosystemDaiAction buttonName="Delegate Funds" actionText="500000 DAI Delegated"/>
          <Givethers count={488}/>
        </div>
      </div>
      <div className="eco-nav-bar">
        <button selected={true}>ABOUT CAMPAIGN</button>
        <button>MILESTONES</button>
        <button>COMMUNITY</button>
        <button>VOTING</button>
      </div>
    </div>
  );
}

export default EcosystemHeader;

