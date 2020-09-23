import React from 'react';
import './App.css';

class Final extends React.Component {
    render() {
        return (

            <div>
                <div className="cake"></div>
                Votre participation est de {this.props.montant} €!<br /><br />
                Votre adresse email {this.props.username} sera utilisée pour toute communication.
                <br /><br />
                <button onClick={this.props.onClickRestart}>Recommencer</button>
            </div>
        );
    }
}

export default Final;