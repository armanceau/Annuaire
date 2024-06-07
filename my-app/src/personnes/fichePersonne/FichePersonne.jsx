import "./FichePersonne.css"
import "../../assets/styles/style.css"

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
            <div class="d-flex justify-content-between w-100">
                <div>
                    {valueGenre}
                </div>
                <div>
                    {dateNaissance}
                </div>
            </div>
            <br />
            <img class="br-20" src={image} alt={ nom + " " + prenom } />
        </div>
    )
}