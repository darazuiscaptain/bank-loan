import React, { Component } from 'react';
import {BankIndex} from "./BankHome/bank";
import AddSomethings from "./MangementAdding/AddSomethings";
 

 


  


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <AddSomethings childes={"ds"}/>
          <BankIndex/> 
            </div>
    );
  }
}
