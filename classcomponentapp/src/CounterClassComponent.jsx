import React from "react";

export default class ClassComponent extends React.Component
{

    constructor(){
      super();
      this.state={
        count : 0
      }
    }

    render(){

      return(
        <div>
          <p>Counter : {this.state.count} </p>
          <button onClick={()=>this.increase()}>Increase</button>
          <button onClick={()=>this.decrease()}>Decrease</button>
        </div>
      );

    }

    increase(){

        this.setState({count : this.state.count + 1});

    }

    decrease(){
        this.setState({count : this.state.count - 1});
    }

    componentDidMount(){
        console.log("Inside componentDidMount");
    }

    componentDidUpdate(){
        console.log("Inside componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("Inside componentWillUnmount")
    }
    
}

