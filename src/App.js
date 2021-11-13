import './App.css';
import Homepage from './components/Homepage/Homepage';

const data = "Hello";

function App() {
  return (
    <div className="app">
      <Homepage sending_data = {data}/>      
    </div>
  );
}

export default App;
