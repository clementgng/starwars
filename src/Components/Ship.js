import React from 'react';

class Ship extends React.Component {
  render() {
    const selfprop = this.props;
    const {name, manufacturer, cost_in_credits } = selfprop;
    return(
      <div className='tc bg-black dib br3 pa3 ma3 grow bw5 shadow-5'>
        <ul className='dib dark-red'>{name}</ul>
        <ul className='dib dark-red'>{manufacturer}</ul>
        <ul className='dib dark-red'>{cost_in_credits}</ul>
      </div>
    );
  }
}

export default Ship;
