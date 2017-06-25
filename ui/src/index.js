import React from 'react';
import {render} from 'react-dom';
import './styles/HomePage.scss'

export default class Login extends React.Component {
    render(){
        return(
            <div className= "container">          
                <div className="panel panel-default">
                    <div className="panel-heading">Login to TravelApp</div>
                    <div className="panel-body">
                        <div>
                            UserName: <input type="text" id="userName" />
                        </div>
                        <div>
                            Password: <input type="text" id="password" />
                        </div>
                        <div>
                            <button type="button"> Login </button>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

render(<Login/>, document.getElementById('app'));

