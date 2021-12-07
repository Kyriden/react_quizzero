import React from "react"
import '../assets/css/styleBoutons.css'

class BoutonReponse extends React.Component{
    constructor(props){
        super(props)
    }

    boutonClique=()=>{
        console.log("le props"+this.props.bonneReponse)
        let tableau= [this.props.reponse, this.props.bonneReponse]
        this.props.test(tableau )
         //this.props.test1(this.props.bonneReponse)
    }

    render(){

        return(
            <button id="boutons" className="slide" onClick={this.boutonClique}>{this.props.reponse}</button>
        )
    }
}

export default BoutonReponse