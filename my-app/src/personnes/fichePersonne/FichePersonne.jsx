import "./FichePersonne.css"

export const FichePersonne = ({nom, prenom, image, dateNaissance, genre}) => {

    let valueGenre = "👨👩❔";

    if(genre === "Masculin"){
        valueGenre = "👨";
    }
    else if(genre === "Féminin"){
        valueGenre = "👩";
    }
    else{
        valueGenre = "❔";
    }

    return (
        <div class="personne"> 
            {nom} {prenom}
            <hr />
            {valueGenre}
            <br />
            {dateNaissance}
        </div>
    )
}