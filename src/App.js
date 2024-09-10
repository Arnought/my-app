import Footer from './components/Footer.js';
import Greeting from './components/Greeting.js';
import './App.css';
import './Custom.css';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple JSX example.</p>
      <Greeting greeting = "Konnichiwa" name = "Aaron"/>
      <Greeting name = "Aaron"/>
    </div>
  );
}

export default App;
