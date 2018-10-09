import React, { Component } from 'react';
import './ProjectItem.css'; 
class ProjectItem extends Component {

  render() {
  	
      return (
      	<tbody>

      <tr className="Project">
		<td id='2'><strong>{this.props.x.category}</strong></td>
		<td><strong>{this.props.x.title}</strong></td>
		<td><strong>{this.props.x.email}</strong></td>
		</tr>
	

		</tbody>    );
  }
}

export default ProjectItem;
