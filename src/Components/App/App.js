import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    searchResults: [
      {
      name: 'Gods Plan',
      artist: 'Drake',
      album:'Scorpion',
      id:'1'
    },

    {
      name: 'Chicago',
      artist: 'Sufjan Stevens',
      album:'Illinoise',
      id:'2'
    },

    {
    name: 'Sara',
    artist: 'Fleetwood Mac',
    album:'Tusk',
    id:'3'
    }
  ]
}

  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar component />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
        </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
