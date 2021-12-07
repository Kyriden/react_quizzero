import React, {useState} from 'react'
import Categories from '../JSON/Categories.json'

const Categorie=()=>{
    const tabCategorie=Categories.categorie
    const [cat1, setCat1] = useState(tabCategorie[0])
    const [cat2, setCat2] = useState(tabCategorie[1])
    const [cat3, setCat3] = useState(tabCategorie[2])
    const [cat4, setCat4] = useState(tabCategorie[3])
    const [cat5, setCat5] = useState(tabCategorie[4])
    const [cat6, setCat6] = useState(tabCategorie[5])

    return(
        <div id="containerBoutonCategorie">
            <button className="boutonCategorie" onClick={() => categorieChoisie(cat1)} >
                {cat1}
            </button>
            <button className="boutonCategorie" onClick={() => categorieChoisie(cat2)}>
                {cat2}
            </button>
            <button className="boutonCategorie" onClick={() => categorieChoisie(cat3)}>
                {cat3}
            </button>
            <button className="boutonCategorie" onClick={() => categorieChoisie(cat4)}>
                {cat4}
            </button>
            <button className="boutonCategorie" onClick={() => categorieChoisie(cat5)}>
                {cat5}
            </button>
            <button className="boutonCategorie" onClick={() => categorieChoisie(cat6)}>
                {cat6}
            </button>
        </div>
    )
}

export default Categorie

const categorieChoisie=(categorie)=>{

    console.log(categorie)
}