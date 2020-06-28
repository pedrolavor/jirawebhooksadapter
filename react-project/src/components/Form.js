import React from 'react';
import './Form.css';

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            newDiscordWebhookUrl: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.newDiscordWebhookUrl);

        this.setState({loading: true});
        fetch('http://google.com')
        .then(res => {
            console.log(res)

            this.setState({
                loading: false,
                newDiscordWebhookUrl: ''
            });
        })
        .catch(err => {
            console.log(err)

            this.setState({
                loading: false,
                newDiscordWebhookUrl: ''
            });
        });
    }

    handleInputChange(event) {
        this.setState({
            newDiscordWebhookUrl: event.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.handleSubmit } >
                    <div className="field">
                        <div className="control">
                            <input type="text"
                                className="input is-medium"
                                placeholder="Paste here your discord webhook url..."
                                value={ this.state.newDiscordWebhookUrl }
                                onChange={ this.handleInputChange } />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control has-text-centered">
                            <button type="submit"
                                className="button is-primary is-outlined">
                                GET MY JIRA ADAPTER LINK
                            </button>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }

}