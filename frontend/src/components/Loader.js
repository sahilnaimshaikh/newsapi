import React, { Component } from 'react';
import LoaderGif from './spinner.gif'
export default class Loader extends Component {
  render() {
    return (
      <>
        <div className='text-center'>
            <img src={LoaderGif} alt="Loader" />
        </div>
      </>
    )
  }
}
