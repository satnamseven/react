import 'bootstrap/dist/css/bootstrap.min.css'
import React,{Component} from 'react';
import {render} from 'react-dom';

let menu_items = [
    {"menu" : "Home", "link" : "/home/", "target" : "_blank" },
    {"menu" : "About", "link" : "/about/", "target" : "_blank" }
]
 
const NavigationBar =({menus}) => {
    return(
        <div className="main-nav">
            <ul>
                {menus.map(
                    (menu,i)=>
                <li key={i}><a  href={menu.link} target={menu.target}>{menu.menu}</a></li>
                )}
            </ul>

        </div>
    )
}
const Header = () => {
    return (
    <h4>Page : </h4>
    )
}

class Tag extends Component{
    render(){
        return(
            <div>
                <NavigationBar menus={menu_items} / >
                    <Header/>
            </div>
        )
    }
}
var root=document.getElementById('root');
render(<Tag/>, root)