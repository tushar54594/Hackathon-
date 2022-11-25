import './App.css';
import Header from './Components/header';
import Body from './Components/body';
import Chatbot from './Components/chatbot';
import Registration from './Components/registration';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Chatbot />
      <Registration />
    </div>
  );
}

export default App;
