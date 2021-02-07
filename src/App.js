import './App.css';

import Recipes from './components/Recipes';

function App() {
  return (
    <div className="App">

      <h1 className = "title"> PagerDuty Recipes! </h1> 
     
      <Recipes className = "recipes"></Recipes> 
    </div>
  );
}

export default App;
