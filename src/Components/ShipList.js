import React from 'react';
import Ship from './Ship.js';

class ShipList extends React.Component {
  render() {
    const selfprop = this.props;
    const { ships } = selfprop;
    const shipper = ships.map((ship, i) => {
      return (
        <Ship
          name={ships[i].name}
          manufacturer={ships[i].manufacturer}
          cost_in_credits={ships[i].cost_in_credits}
        />
      )
    });
    return( <div>{shipper}</div>);
  }
}

export default ShipList;
