import React from 'react';
import logo from './logo.svg';
import './App.css';
import Final from './Final';

class App extends React.Component {
  state = {
      username: '',
      password: '',
      errorMessage: '',
      montant: 0,
      step: 0
  }

  handleGoToStep4 = () => {
    this.setState({
        step: 4
    })
  } 
  handleGoToStep3Custom = () => {
    this.setState({
        step: 3,
    })
  } 
  handleGoToStep32 = () => {
    this.setState({
        step: 3,
        montant: 2
    })
  } 
  handleGoToStep35 = () => {
    this.setState({
        step: 3,
        montant: 5
    })
  } 
  handleGoToStep310 = () => {
    this.setState({
        step: 3,
        montant: 10
    })
  } 
  handleGoToStep320 = () => {
    this.setState({
        step: 3,
        montant: 20
    })
  } 

  handleGoToStep2 = () => {
      if (this.state.username == 'projet@project.com' && this.state.password == 'topito') {
          this.setState({
              errorMessage: '',
              step: 2
          })
      } else {
          this.setState({
              errorMessage: 'Votre identidiant est incorrect'
          })
      }
  }

  handleGoToStep1 = () => {
      this.setState({
          username: '',
          password: '',
          step: 1
      })
  }

  handleGoToStep0 = () => {
    this.setState({
        step: 0
    })
}

  handleChangeUsername = (event) => {
      const newValue = event.target.value;
      this.setState({
          username: newValue
      })
  }

  handleChangePassword = (event) => {
      const newValue = event.target.value;
      this.setState({
          password: newValue
      })
  }

  handleChangeMontant = (event) => {
      const newValue = event.target.value;
      this.setState({
          montant: newValue
      })
  }

  render() {
      let blockStep0 = null;
      let blockStep1 = null;
      let blockStep2 = null;
      let blockStep3 = null;
      let blockStep4 = null;

      if (this.state.step == 0) {
        blockStep0 = (
            <div>
                Bienvenue dans l'application de cagnotte pour les cadeaux d'anniversaire !<br/>
                Ce lien concerne la cagnotte de l'anniversaire de Sophie Dupont<br/><br/>
                <button onClick={this.handleGoToStep1}>Participer</button>
            </div>
        );
      } else {
          blockStep0 = null;
      }

      //STEP1---------------------

      if (this.state.step == 1) {
          blockStep1 = (
              <div>
                  <input type="text" value={this.state.username} onChange={this.handleChangeUsername} placeholder="email" /><br/>
                  <input type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="password"/><br/>
                  <button onClick={this.handleGoToStep2}>Se connecter</button>
              </div>
          );
      } else {
          blockStep1 = null;
      }

      //STEP2---------------------

      if (this.state.step == 2) {
          blockStep2 = (
              <div>
                  <div className="logge"></div>
                  <br /><br />
                  Félicitations, vous êtes loggé !<br /><br />
                  Veuillez sélectionner un montant ci-dessous pour la cagnotte de votre amie :
                  <br /><br />
                  <button onClick={this.handleGoToStep32}>2 euros</button>
                  <button onClick={this.handleGoToStep35}>5 euros</button>
                  <button onClick={this.handleGoToStep310}>10 euros</button>
                  <button onClick={this.handleGoToStep320}>20 euros</button>
                  <button onClick={this.handleGoToStep4}>Autre ...</button>
              </div>
          );
      } else {
          blockStep2 = null;
      }
      
      //STEP3---------------------

      if (this.state.step == 3) {
          blockStep3 = (
              <Final montant={this.state.montant} username={this.state.username} onClickRestart={this.handleGoToStep0} />
          );
      } else {
          blockStep4 = true;
      }

      //STEP4---------------------

      if (this.state.step == 4) {
        blockStep4 = (
            <div>
                Saisissez votre montant de participation<br/><br/>
                <input type="text" value={this.state.montant} onChange={this.handleChangeMontant} /><br/>
                <button onClick={this.handleGoToStep3Custom}>Valider</button>
            </div>
        );
    } else {
        blockStep4 = null;
    }

    //View---------------------

      return (
          <div className="App">
            <header className="App-header">
              <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="messages">
                {this.state.errorMessage}
                {blockStep0}
                {blockStep1}
                {blockStep2}
                {blockStep3}
                {blockStep4}
              </div>
            </header>
          </div>
        );
  }
}

export default App;
