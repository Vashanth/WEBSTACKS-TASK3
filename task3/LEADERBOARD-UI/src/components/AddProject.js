import React, { Component } from 'react';
 
class AddProject extends Component {
  static defaultProps={
    categories:['vash','venkzz','ragho']
  }
  myfunc()
  {
    console.log('VASH');
  }
	render() {
    let categoryoptions=this.props.categories.map(y=>{
      return (<option key={y} value="category">{y}</option>)
    });
  
    return (
      <div>
      <h3> AddProject</h3>
      <form onSubmit={this.myfunc}>
      <div>
      <label>TITLE:</label><br />
      <input type="text" ref="title" />
            </div>
      <div>
      <label>TITLE:</label>
        <select ref="category">
        {categoryoptions}
        </select>
              </div>
              <input type="submit" value="sub" />
      </form>
      </div>
    );
  }
}

export default AddProject;
