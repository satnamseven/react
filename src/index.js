import React,{Component} from 'react';
import {render} from 'react-dom';

let nameData = {
    name: "satnam ",
    age : 23,
    work : "ss"
}

class Message extends Component{
    render(){
        const {name, age, work}=this.props;
        return(
        <div>
        <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{work}</li>
        </ul>
        </div>
        )
    }
}
var root=document.getElementById('root');
render(<Message
name={nameData.name} age={nameData.age} work={nameData.work}
/>, root)