import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App=()=>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return(
        <ChatEngine
        height="100vh" 
        projectID="84afea5e-7eb6-469e-b902-105a61e16f2a" 
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatappProps)=><ChatFeed{...chatappProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
} 
export default App;