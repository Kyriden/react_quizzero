import questions from '../JSON/questions_final.json'


    export const tabDeQuestions=()=>{
        const monTableau=questions.categorie
        console.log(monTableau)
        return monTableau
    }


    export function nombreAleatoire(monTab){
        const nombreCaseTab= monTab.length
        const numeroRandom=  Math.floor(Math.random() *nombreCaseTab)
        return numeroRandom
    }

    export function round(){
        //on recupere le tableau du Json
        const tab= tabDeQuestions()
        //on recupere l'ensemble des categories au'on stocke dans un tableau
        const mesCategories =Object.keys(tab)
        //on prend une categorie au hasard
        const nombrealeatoireCategorie=nombreAleatoire(mesCategories)
        const tabQuestions= tab[mesCategories[nombrealeatoireCategorie]]
        //On prend une question au hasard
        const nombrealeatoireQuestion=nombreAleatoire(tabQuestions)
        const maQuestion=tabQuestions[nombrealeatoireQuestion]
        console.log(maQuestion)
        return maQuestion
    }
