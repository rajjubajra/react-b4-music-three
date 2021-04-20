import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

import Copyright from '../BootstrapFive/Copyright/Copyright';
import MusicThree from '../BootstrapFive/03MusicThree/MusicThree';


const Router = () => {


  return (
    <BrowserRouter basename={`/react/b4music-three`}>
      <Switch>
        <MusicThree />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )
}

export default Router
