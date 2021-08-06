import React, { useContext, useEffect, useState } from 'react'
import SocketContext from './Context/SocketContext';
import Layout from './Layout';



export default(props) => {
    const [groupUsers,setGroupUsers]=useState([])
    const [message,setMessage]=useState("")
    const [messages,setMessages]=useState([])
    const group= props.location.state.group
    const username= props.location.state.username
    const socket = useContext(SocketContext)
    useEffect(()=>{
        //Get group and users
        socket.on('groupUsers',({group,users})=>{
            outputUsers(users)
        })

        socket.on('message',message=>{
            outputMessage(message)
        })
    })

    const outputUsers = users =>{
        setGroupUsers(users)
    }
    const outputMessage = message=>{
        let newMessages =messages;
        let finalMessages = newMessages.concat(message)
        setMessages(finalMessages)
    }
    const chatMessageSubmitHandler =e=>{
        e.preventDefault()
        console.log(message)
        socket.emit("chatMessage",message)
    }
    return (
        <Layout>
            <>
            <div className="chat-sidebar">
            <h3><i className="fas fa-comments"></i> Group Name: </h3>
            <h2 id="roon-name">{group}</h2>
            <h3><i className="fas fa-users"></i> Users</h3>
            <ul id="users">
            {groupUsers.map(user =>(
            <li>{user.username}</li>
            ))}
            </ul>
            </div>
            <div className="chat-nessages">
                {messages.map(message =>(
                <div>
                <div>
                {message.username} sent on {message.time}
                </div>
                <div>
                {message.text}
                </div>
                <br></br>
                </div>
                ))}
                 </div>
                <div className="chat-forn-container">
                <form id="chat-form" onSubmit={chatMessageSubmitHandler}>
                <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                value={message}
                onChange={e => setMessage(e. target.value)}
                />
                <button className="btn">
                <i className="fa fa-paper-plane"></i>
                Send
                </button>
                </form>
</div>
            </>

   

        </Layout>
    )
}
