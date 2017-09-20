import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
        <FilteredFruitList
          filter={props.currentFilter} fruit={props.fruit} />
      </div>
    );

}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: '',
  updateFilterCallback: function() {}
}
// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.props.handleChange} filters={this.props.filters}/>
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

export default FruitBasket;
