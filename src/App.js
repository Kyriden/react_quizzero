import './App.css';
import React, {useState} from 'react'
import Titre from './titre';
import BasDePage from './Composants/BasDePage';
import MaQuestion from './Composants/Controleur';
import Categorie from './Composants/Categorie';
import ConteneurQuestionReponses from './Composants/ConteneurBoutonQuestion';
import { HandleLangChange } from './Composants/Categorie';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route} from  "react-router-dom"
import Fichiertest from './Composants/fichiertest';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      maCategorie: ""
    };
  }

  categorieChoisie(cat) {
    this.setState({
      maCategorie: cat
    });
  }
  
  render() {
    return (      
      <div className="App">

        
          <main>
            
              <a href="Commencer">Commencer</a>
              
          </main>
        <Categorie categorieChoisie={this.categorieChoisie.bind(this)}/>
        <p>{this.state.maCategorie}</p>
        <ConteneurQuestionReponses categorieChoisie={this.state.maCategorie} />
        <Fichiertest />
      </div>
      
    );
  }
}

export default App