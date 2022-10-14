import React, {Component} from 'react';
import {BankIndex} from "./BankHome/bank";


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <BankIndex/>
            </div>
        );
    }
}
