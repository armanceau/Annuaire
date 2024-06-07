import logo from './logo.svg';
import './App.css';
import { FichePersonne } from './personnes/fichePersonne/FichePersonne';
import { personne } from './personnes/Personnes';
import { ListePersonnes } from './personnes/ListePersonnes';

function App() {
    return (
		<div class="wrapper">
			<h1>Annuaire</h1>	
			<ListePersonnes liste={personne}/>
		</div>
    );
}

export default App;
