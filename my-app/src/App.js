import './App.css';
import { personne } from './personnes/Personnes';
import { ListePersonnes } from './personnes/ListePersonnes';

function App() {
    return (
		<div class="App">
			<h1>Annuaire</h1>	
			<ListePersonnes liste={personne}/>
		</div>
    );
}

export default App;
