import React from 'react'
import "../assets/css/styleTimer.css"

const CompteARebours = ({Temps}) => {
   
    const {seconds = 60 } = Temps;
    const [[secs], setTime] = React.useState([seconds]);
    

    const tick = () => {
   
        if (secs === 0) {
            reset();
        } else {
            setTime([secs - 1]);
        }
    };


    const reset = () => {
        alert ("temps ecoulé. Fin de partie")
        window.location.reload();
    }
    ;
    //ici lancer la fin de partie

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div id="countdown">
            <p>{`${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CompteARebours;
