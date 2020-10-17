import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
       fullName:"Chokri hamza",
       bio:`Years | 2015-2018
       Engineering degree– The National Higher Engineering School of
       Tunis
       Years | 2013-2015
       Preparatory cycle– Preparatory Institute Of Engineering Studies
       Of Gabes
       Year | 2012-2013
       Bachelor.`,
       imgSRC:"./images/avatar.jpg",
       profession:"Industrial Engineer",
       show:true,
       date:new Date()
    };


  }

 toggleClick=()=>{
   this.setState((state)=>({show:!state.show}));
 }
  Meniteur(){
    this.setState({date:new Date()});
  }

  
  componentDidMount() {
    this.updateTime=setInterval(
      ()=>this.Meniteur(),1000
    );
  }
 componentWillUnmount() {
   clearInterval(this.updateTime)
  }

  render() {
     if(this.state.show){
       return ( 
         <div className="Person__description">
         <h1 className="Timer">Hello the time is {this.state.date.toLocaleTimeString()}</h1>
        <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <img className="Avatar" src={this.state.imgSRC}  alt="Avatar chokri hamza " />
         <h1>{this.state.profession}</h1>
        
        <button className="buttonToggle" onClick={this.toggleClick}>Toggle with your profile</button>
       </div>);
     }
     return <div className="buttonFrame">
     <h1 className="Timer">Hello the time is {this.state.date.toLocaleTimeString()}</h1>
     <button className="buttonToggle" onClick={this.toggleClick}>Toggle with your profile</button>
     </div>;
     
    
  }
}



export default App
