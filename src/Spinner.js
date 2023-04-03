import React, { Component } from 'react'


export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="main_section">
        <div className='text-center spinner'>
        <div className='spinner-border text-primary'></div>
        <div className='spinner-border ms-2 me-2 text-warning'></div>
        <div className='spinner-border text-danger'></div>
        </div>
        </div>
      </>
    )
  }
}

export default Spinner;


