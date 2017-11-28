import React, { Component } from 'react';

import './App.css';

import AppHead from './AppHead';
import AppFooter from './AppFooter';
import MainBoard from './MainBoard';
import Tile from './Tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [{
        id: 0,
      }],
      count: 1,
    };
    this.handleNewTile = this.handleNewTile.bind(this);
  }

  handleNewTile() {
    const newTiles = this.state.tiles;
    newTiles.push({
      id: this.state.count,
    });
    this.setState({
      tiles: newTiles,
      count: this.state.count + 1,
    });
  }

  render() {
    const tiles = this.state.tiles.map(element => (
      <Tile key={element.id} />
    ));
    return (
      <div>
        <AppHead onNewTile={this.handleNewTile} />
        <MainBoard>
          {tiles}
        </MainBoard>
        <AppFooter />
      </div>
    );
  }
}

export default App;
