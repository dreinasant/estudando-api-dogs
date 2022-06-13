import React, { Component } from "react";
import ApiCats from "./ApiCats";
import './App.css';

export default class App extends Component {
  state = {
    componenteDaAula: true
  };

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({componenteDaAula: false})
  //   }, 8000)
  // }

  render() {
    return <>{this.state.componenteDaAula && <ApiCats />}</>;
  }
}