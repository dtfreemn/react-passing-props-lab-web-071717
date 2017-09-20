import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render() {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} updateFilterCallback={this.handleFilterChange} currentFilter={this.state.currentFilter}/>
    )
  }

}

export default App;
