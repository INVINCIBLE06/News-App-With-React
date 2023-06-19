import React, { Component } from 'react'
import Loader from './Loading.gif';

export class loader extends Component {
  render() 
  {
      const loaderContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      };
  
      return (
        <div style={loaderContainerStyle}>
          <img className = "my-3" src={Loader} alt="Loading" />
        </div>
      );
    }
  }

export default loader;

