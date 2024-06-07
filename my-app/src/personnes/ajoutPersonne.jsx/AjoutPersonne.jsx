import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../assets/styles/style.css";

export const AjouterPersonne = ({liste, setGetListe}) => {
    const [temp, setTemp] = useState({nom:"", prenom:"", image:"", dateNaissance:"", genre:""})

    const onSubmit = (e) => {
        e.preventDefault();
        setGetListe([...liste, temp]);
        console.log(liste)
    }

    const onChange = (e) => {
       temp[e.target.name] = e.target.value;
       setTemp(temp);
    }

    return (
        <div>
            <form action="addPerso" onSubmit={onSubmit} class="form-group">
                <div class="d-flex w-100 gap-20">
                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" name="nom" class="form-control" onChange={onChange} />
                    </div>

                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" name="prenom" class="form-control" onChange={onChange} />
                    </div>
                </div>

                <br />

                <div class="d-flex w-100 gap-20">
                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="dateNaissance">Date de naissance :</label>
                        <input type="date" name="dateNaissance" class="form-control" onChange={onChange} />
                    </div>

                    <div class="d-flex align-items-start flex-column w-50">
                        <label htmlFor="prenom">Genre :</label>
                        <div>
                            <input type="radio" id="Masculin" name="Masculin" value="Masculin"  onChange={onChange}/>
                            <label for="Masculin">Masculin</label>
                        </div>

                        <div>
                            <input type="radio" id="Féminin" name="Féminin" value="Féminin" onChange={onChange}/>
                            <label for="Féminin">Féminin</label>
                        </div>
                    </div>
                </div>

                <div class="w-100 d-flex justify-content-end">
                    <button type="submit" class="btn btn-sm btn-primary">Ajouter</button>
                </div>

            </form>
        </div>
    )
}