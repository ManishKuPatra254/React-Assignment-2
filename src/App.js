// import logo from './logo.svg';
import './App.css';
import { Invitation } from './Components/Invitation/Invitation';

function App() {
  return (
    <div className="App">
      <Invitation birthday="Birthday party Invitation" email="jaGdish@gmail.com" party="birthday party" names="Ritu , Saurabh , Kartik ." area="Green field Avenue ." name="JaGdish" />
    </div>
  );
}

export default App;
