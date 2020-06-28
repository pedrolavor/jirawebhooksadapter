import React from 'react';
import './App.css';
import Form from './Form';

export default class App extends React.Component {

    render() {
        return(
            <div className="hero is-dark is-fullheight">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title">JIRA WEBHOOKS ADAPTER</h1>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }

}