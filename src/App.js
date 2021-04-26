
import './css/App.css';
import Header from './Components/Header';
import NewsFeed from './Components/NewsFeed';
import Stats from './Components/Stats';

function App() {
  return (
    <div className="App">
		{/* HEADER */}
		<div className="app__header">
			<Header />
		</div>

		{/* BODY */}
		<div className="app__body">
			<div className="app__container">
				<NewsFeed />
				<Stats />
			</div>
		</div>
    </div>
  );
}

export default App;
