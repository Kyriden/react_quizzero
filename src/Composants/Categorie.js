import React, {useState} from 'react'
import categoriesJSON from '../JSON/Categories.json'

class Categorie extends React.Component {

    /*let categorieChoisie="ma categorie"

    function getCategorieChoisie(){
        return categorieChoisie
    }

    const tabCategorie=Categories.categorie
    const [cat1, setCat1] = useState(tabCategorie[0])
    const [cat2, setCat2] = useState(tabCategorie[1])
    const [cat3, setCat3] = useState(tabCategorie[2])
    const [cat4, setCat4] = useState(tabCategorie[3])
    const [cat5, setCat5] = useState(tabCategorie[4])
    const [cat6, setCat6] = useState(tabCategorie[5])*/

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            categories: categoriesJSON.categorie
        }
    }

    render() {
        //permet d'eviter d'appeler le this de la fonction
        let that = this;
        return(
            <div id="containerBoutonCategorie">
                <button className="boutonCategorie" onClick={function() { that.props.categorieChoisie(that.state.categories[0]) }} >
                    {this.state.categories[0]}
                </button>
                <button className="boutonCategorie" onClick={function() { that.props.categorieChoisie(that.state.categories[1]) }} >
                    {this.state.categories[1]}
                </button>
                <button className="boutonCategorie" onClick={function() { that.props.categorieChoisie(that.state.categories[2]) }} >
                    {this.state.categories[2]}
                </button>
                <button className="boutonCategorie" onClick={function() { that.props.categorieChoisie(that.state.categories[3]) }} >
                    {this.state.categories[3]}
                </button>
                <button className="boutonCategorie" onClick={function() { that.props.categorieChoisie(that.state.categories[4]) }} >
                    {this.state.categories[4]}
                </button>
                <button className="boutonCategorie" onClick={function() { that.props.categorieChoisie(that.state.categories[5]) }} >
                    {this.state.categories[5]}
                </button>
            </div>
        )
    }
}



export default Categorie

