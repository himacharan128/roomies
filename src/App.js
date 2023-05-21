import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App=()=>{
    return(
        <ChatEngine
        height="100vh" 
        projectID="84afea5e-7eb6-469e-b902-105a61e16f2a" 
        userName="himacharan" 
        userSecret="123123"
        renderChatFeed={(chatappProps)=><ChatFeed{...chatappProps}/>}
        />
    );
} 
export default App;