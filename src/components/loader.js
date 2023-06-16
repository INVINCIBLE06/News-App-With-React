import React, { Component } from 'react'
import Loader from './Loading.gif';

export class loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loader} alt="Loading"></img>
      </div>
    )
  }
}

export default loader;