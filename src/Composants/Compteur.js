import React from 'react';
import CompteARebours from './Comptearebours';

class Compteur extends React.Component{
    constructor(props) {
        super(props);
        }

    render() {
        const leTimer={seconds: 30}
        return(
            <div className="Timer">
                <CompteARebours Temps={leTimer}  />
            </div>
        )
    }
}

export default Compteur
