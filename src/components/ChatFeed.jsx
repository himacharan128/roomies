import MessageForm from "./MessageForm";
import ReplyMessage from "./ReplyMessage";
import MyMessage from "./MyMessage";

const ChatFeed=(props)=>{
    const{ chats,activeChat,userName,messages }=props;
    const chat= chats && chats[activeChat];
    const renderMessages=()=>{
        const keys=Object.keys(messages);
    }
    renderMessages();
    return(
        <div>
            ChatFeed
        </div>
    );
}
export default ChatFeed;