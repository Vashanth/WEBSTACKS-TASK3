import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {
  	let pi;
	if(this.props.projects)
	{
		pi=this.props.projects.map(x=>{
			// console.log(x);
			return(
				<ProjectItem key={x.category} x={x}/>)
		});
	}


  	console.log(this.props);
    return (
      <div className="Projects">
        {pi}
      </div>
    );
  }
}

export default Projects;
