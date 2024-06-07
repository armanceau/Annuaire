import "./FichePersonne.css";
import "../../assets/styles/style.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


export const FichePersonne = ({nom, prenom, image, dateNaissance, genre, description}) => {

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
        <div class="personne border shadow-sm br-20"> 

            {nom} {prenom}

            <hr />
            
            <div class="d-flex justify-content-between w-100 mb-1">
                <div class="genre" title={genre}>
                    {valueGenre}
                </div>
                <div>
                    {dateNaissance}
                </div>
            </div>

            <img class="br-20" src={image} alt={ nom + " " + prenom } />

            <br />

            <Popup 
                trigger={
                <button className="btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-05 br-20"> 
                    <i class="bi bi-search"></i> 
                    Détails 
                </button>} 
                modal nested>    
                {close => (      
                    <div className="popup">        
                        <button className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center" onClick={close}>          
                            <i class="bi bi-x"></i>
                        </button>        
                        <div className="header"> 
                            <h2>
                                {nom} {prenom} 
                            </h2>
                        </div>        
                        <div className="content">          
                            {' '}          
                            Genre : {genre} {valueGenre}
                            <br />
                            Date de naissance : {dateNaissance}
                            <br />
                            <i>
                                <p>
                                    {description}
                                </p>
                            </i>
                        </div>        
                    </div>    
                )}  
			</Popup>
            
        </div>
    )
}