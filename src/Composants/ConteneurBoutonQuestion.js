import React, {useState} from 'react'
import * as Controleur from './Controleur'




class ConteneurQuestionReponses extends React.Component{

   

    constructor(props){
        super(props)
        

        //peut etre mettre dans le constructeur le state

    }

  

    /*
    const methodeBidule=(props)=>{
        console.log(props)
    }

    const tabQuestions=Controleur.tabQuestionSelonCategorie()
    console.log(tabQuestions)
    console.log(props)
    //props
*/
    
    
render(){
    const categorie =this.props.categorieChoisie
    const tabQuestion= Controleur.tabQuestionSelonCategorie(categorie)
    const saMere= [1,1,1]
    console.log(tabQuestion)
    //const tailleTab= tabQuestion.length()
    const numeroRandom=  Math.floor(Math.random() *25)
    //const maQuestion= tabQuestion[0]
    //console.log(maQuestion)


    //const maQuestion=tabQuestion[nbAleatoire]
    //console.log(maQuestion)


    
    return(
        <div id="containerQuestion">
            <h1 id="affichageQuestion">{categorie}</h1>

            <button className="boutonReponse" >
                truc
            </button>
            <button className="boutonReponse" >
               
            </button>
            <button className="boutonReponse" >
               
            </button>
            <button className="boutonReponse" >
                
            </button>
            
        </div>
    )
}
    
}

export default ConteneurQuestionReponses


