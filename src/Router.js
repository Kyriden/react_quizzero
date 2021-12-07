import React from"react"
import reactDom from "react-dom"
import Categorie from "./Composants/Categorie";

import {
    BrowserRouter as Router,
  } from "react-router-dom";

  const ouOnEst=()=>{
      const location = useLocation()
      console.log(location)


  }

  const PageCategorie= (props) =>{
    ouOnEst()
      return (
          <div>
            <Categorie />
          </div>
          

      )
  }

  export default PageCategorie