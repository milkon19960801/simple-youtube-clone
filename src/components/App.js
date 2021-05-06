import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youTube';

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get('/search', { params: { q: term } });
    console.log(term);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFromSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
