import { FichePersonne } from "./fichePersonne/FichePersonne";

export const ListePersonnes = ({liste}) => {
    return (
        <div>
            {
                liste.map((value, index) => {
                    return(
                            <FichePersonne key={index} nom={value.nom} prenom={value.prenom} image={value.image} genre={value.genre} dateNaissance={value.dateNaissance}/>
                    )
                })
            }
        </div>

    )
}