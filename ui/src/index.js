import React from 'react';
import {render} from 'react-dom';

export default class Login extends React.Component{
    render(){
        return <h1>Welcome to my travel app</h1>
    }
}

render (<Login/>, document.getElementById('app'));

