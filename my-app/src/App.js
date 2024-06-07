import './App.css';
import { personne } from './personnes/Personnes';
import { ListePersonnes } from './personnes/ListePersonnes';
import 'reactjs-popup/dist/index.css';
import { Statistiques } from './statistiques/Statistiques';

function App() {
    return (
		<div class="App">
			<h1>Annuaire</h1>	
			<Statistiques liste={personne} />
			<ListePersonnes liste={personne}/>
		</div>
    );
}

export default App;
