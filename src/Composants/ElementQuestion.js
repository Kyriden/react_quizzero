import React from 'react'
import Questions from './Question'
import BoutonReponse from './BoutonReponse'
import { round } from './Controleur'


class ElementQuestion extends React.Component{

    constructor(props){
        super(props)

         this.state={
             reponseChoisie: "", bonneReponse:"", perdu:false
         }  
    }



//lance deux fois le setState donc ne va pas !!!!
    test = (p) => {
        const reponseUser=p[0]
        const bonneReponse=p[1]

        this.calculPoint(p)

        this.setState({
            reponseChoisie: reponseUser,
            bonneReponse: bonneReponse
        });
        
    }

    calculPoint (p){

        const reponseUser=p[0]
        const bonneReponse=p[1]
        
            if (reponseUser==bonneReponse){
                this.props.valeur(true)
                
            }else{
              console.log("perdu")
              //fin de partie

              const scorejoueur= this.props.scoreUser


              if(this.props.scoreUser>15){
                alert("Impressionant. Ton score est "+ this.props.scoreUser)
              }
              if(this.props.scoreUser>10 && this.props.scoreUser<=15){
                alert("Pas mal. Ton score est "+ this.props.scoreUser)
              }
              if(this.props.scoreUser>7 && this.props.scoreUser<=10){
                alert("Tu es sur la bonne piste. Ton score est "+ this.props.scoreUser)
              }
              if(this.props.scoreUser>4 && this.props.scoreUser<=7){
                alert("Tu peux mieux faire. Ton score est "+ this.props.scoreUser)
              }
              if(this.props.scoreUser>=1 && this.props.scoreUser<=4){
                alert("Oula...... Ton score est "+ this.props.scoreUser)
              }
              else{
                  alert("Corentin c'est toi ?")
              }
              window.location.reload();
        } 
    }

    render(){
       const maQuestion=round()
       //Melange du tableau de reponses
       let tabReponses= [maQuestion.reponseA,maQuestion.reponseB ,maQuestion.reponseC,maQuestion.reponseD]
       const tabReponsesMelange = tabReponses.sort(() => 0.5 - Math.random());

       
       
       

        return(
            <div>
                <Questions question={maQuestion.maQuestion} />
                <BoutonReponse test ={this.test}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[0]}  />
                <BoutonReponse test ={this.test}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[1]}  />
                <BoutonReponse test ={this.test}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[2]}  />
                <BoutonReponse test ={this.test}  bonneReponse={maQuestion.maReponse} reponse={tabReponsesMelange[3]}  />
            </div>
        )
    }


}

export default ElementQuestion