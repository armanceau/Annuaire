import { FichePersonne } from "./fichePersonne/FichePersonne";
import 'bootstrap/dist/css/bootstrap.css';

export const ListePersonnes = ({liste}) => {
    return (
        <div class="d-flex flex-wrap justify-content-center">
            {
                liste.map((value, index) => {
                    return(
                            <FichePersonne key={index} nom={value.nom} prenom={value.prenom} image={value.image} genre={value.genre} dateNaissance={value.dateNaissance} description={value.description} />
                    )
                })
            }
        </div>

    )
}