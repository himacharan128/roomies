const ReplyMessage=({lastMessage,message})=>{
    const isFristMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return(
        <div className="message-row">
            {isFristMessageByUser && (
                <div
                className="message-avatar"
                style={{backgroundImage:  message.sender && 'url( ${message?.sender.avatar})'}}
                />
            )}
            {message.attachments && message?.attachments?.length >0
                    ? (
                        <img
                        className="message-image"
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        style={{ marginLeft: isFristMessageByUser ? '4px' : '48px' }}
                        />
                    ) 
                    : (
                        <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFristMessageByUser ? '4px' : '48px' }}>
                            {message.text}
                        </div>
                    )
            }
        </div>
    );
};
export default ReplyMessage;