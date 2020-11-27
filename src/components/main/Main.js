import React, {Component} from 'react';
class Main extends Component{
  
  render(){
    return (
        <div style={{width:"100%",padding:"20px",float:"left"}}>
            {
                this.props.children
            }
        </div>
    );
  }
  
}

export default Main;
