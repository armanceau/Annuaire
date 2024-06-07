import { FichePersonne } from "./fichePersonne/FichePersonne";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { AjouterPersonne } from "./ajoutPersonne.jsx/AjoutPersonne";
import "../assets/styles/style.css";


export const ListePersonnes = ({liste}) => {
    const [getListe, setGetListe] = useState(liste)

    return (
        <div class="d-flex flex-wrap justify-content-center align-items-center flex-column w-100 gap-20">
            <div class="border shadow-sm w-80 p-3 br-20">
                <AjouterPersonne liste={getListe} setGetListe={setGetListe}/>
            </div>
            <div class="d-flex flex-wrap justify-content-center w-80">
                {
                    getListe.map((value, index) => {
                        return(
                            <FichePersonne key={index} nom={value.nom} prenom={value.prenom} image={value.image} genre={value.genre} dateNaissance={value.dateNaissance} description={value.description} />                            
                        )
                    })
                }
            </div>
        </div>

    )
}