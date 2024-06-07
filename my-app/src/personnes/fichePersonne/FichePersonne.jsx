import "./FichePersonne.css";
import "../../assets/styles/style.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';

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
        <div class="personne shadow-sm br-20"> 
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

            <Popup trigger={<button className="btn btn-sm btn-primary"> Détails </button>} modal nested>    
                {close => (      
                    <div className="popup">        
                        <button className="btn btn-outline-danger" onClick={close}>          
                            &times;        
                        </button>        
                        <div className="header"> 
                            {nom} {prenom} 
                        </div>        
                        <div className="content">          
                            {' '}          
                            Genre : {genre} {valueGenre}
                            <br />
                            Date de naissance : {dateNaissance}
                        </div>        
                    </div>    
                )}  
			</Popup>
            <img class="br-20" src={image} alt={ nom + " " + prenom } />
            
        </div>
    )
}