import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
    render(){
        return(
        <div>
        <h1 style={{color:this.props.color}}>{this.props.msg}</h1>
        <h2>i wil be back in {this.props.mins} minutes </h2>
        </div>
        )
    }
}
var root=document.getElementById('root');
ReactDOM.render(<Message color="red" msg="hello this is react" mins={5} />, root)