'use strict'

import React from 'react';
import { render } from 'react-dom';

import Multistep from './multistep'
import { steps } from './signup'

console.log(steps)
class App extends React.Component {
  render() {
    return (
        <div>
          <Multistep initialStep={1} steps={steps}/>
        </div>
    )
  }
}

render(<App/>, document.querySelector("#app"));
