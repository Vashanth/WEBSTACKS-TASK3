import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects.js'
import {Link} from 'react-router-dom';
import Router from 'react-router-dom';
import NavBar from './components/navbar.js'

import Cards from './components/cards.js'

class App extends Component {

	constructor(props)
	{
		super();
		this.state={
			projects:[
			{
				title: 'vashanth',
				category:'1',
				email:'vashanth@gmail.com'
			},
			{
				title:'venkat',
				category:'2',
				email:'venk@gmail.com'
			},
			{
				title:'ragav',
				category:'3',
				email:'ragh@gmail.com'
			},
			{
				title:'seshagopal',
				category:'4',
				email:'sesh@gmail.com'
			},
			{
				title:'shiva',
				category:'5',
				email:'shiv@gmail.com'
			}
			]
		}
	}
  render() {
    return (
      <div className="App">

      <NavBar />
      <h2><strong><b>LEADERBOARD</b></strong></h2>
            <Cards />
            <br />

      <table class="table table-dark table-hover"><tbody><th>RANK</th>
      <th>Name</th>
      <th>Account-email-id</th>
      </tbody>
      </table>
        <table class="table table-dark table-hover"><Projects projects={this.state.projects}/></table>
      </div>
    );
  }
}

export default App;
