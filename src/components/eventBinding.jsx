import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message :"Welcome to Digital Transformation"
      }
    }
    ClickHandler(){
        this.setState({
            message : "Enterprise Architecture"
        
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        <h2>EventBinding</h2>
        <p>Message :{this.state.message}</p>
        {/* <button onClick={this.ClickHandler.bind(this)}>In</button> */}
        <button onClick={()=>this.ClickHandler}>click </button>
      </div>
    )
  }
}
export default EventBinding