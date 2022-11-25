import './chatbot.css'
import './registration.scss'

function Chatbot() {
    // const [isVisible, setIsVisible] = useState(true);

    // const handleClick = event => {
    //   setIsVisible(current => !current);
    // };

  return (
    <div className="chatbot">
      <div className="chat-heading">
        <span>Health Diagnosis </span>
      </div>
      <div className="chat-body">
        <div className="chat-output"></div>
        <input type="text" className="chat-input" placeholder="Enter your symptoms"/>
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Chatbot;
