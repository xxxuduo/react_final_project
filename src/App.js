import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1fO0fmOyoXHGfJgvhVLxNlyCdKvkYVS4R8zzEDIBXH9w',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Team-One React Decal Final Project</h1>
        </header>
        <div id="team-details">
          {
            data.map(obj => {
              return (
                <div key={obj.team_name}>
                  <a href={obj.Link}><h2>{obj.team_name}</h2></a>
                  <p>{obj.members}</p>
                  {/* <img alt={obj.team_name} src={obj.img}/> */}
                  <a href={obj.Link}><img alt={obj.team_name} src={obj.img}/></a>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
