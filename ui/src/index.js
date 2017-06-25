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
                        <div className = "third-party-login">
                            <p className="login-info-text"> Easily Using </p>
                        <span className="third-party-buttons"><a href="#"><i className="fa fa-facebook fa-2x"> facebook</i></a></span>
<span className="third-party-buttons"><a href="#"><i className="fa fa-google-plus fa-2x"></i> google</a></span>

                            </div>
                             <p className="login-info-text"> --Or Using Email-- </p>
                        <div>
                         <input type="text" id="email" placeholder="Your Email Address" className = "login-user-input-email login-user-input" />
                        </div>
                        <div>
                            <input type="text" id="password" placeholder= "Enter Password" className = "login-user-input-password login-user-input" />
                        </div>
                        <div>
                            <button type="button" className="login-login-button"> Log in </button>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}

render(<Login/>, document.getElementById('app'));

