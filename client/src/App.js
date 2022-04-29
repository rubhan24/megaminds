
import './App.css';
import AddUsers from './components/addUsers/addUsers';
import Form from './components/form/form';
import Leaderboard from './components/leaderboard/leaderboard';


function App() {
  return (
    <div className="App">
    <h1 className="Title">MasterMinds!</h1>
    <Leaderboard />
    <Form />
    <AddUsers />
   
    </div>
  );
}

export default App;
