import React, { useContext, useState } from 'react'
import SocketContext from './Context/SocketContext';
import { useHistory } from 'react-router-dom';
import Layout from './Layout'


export default() => {
    const [username,setUsername]=useState("")
    const [group,setGroup] = useState("JavaSript")
    const socket =useContext(SocketContext)
    const history =useHistory()
    const joinGroupSubmitHandler=(e)=>{
        e.preventDefault();
        socket.emit("joinGroup",{username,group})
        history.push({
            pathname:"/chat",
            state:{username,group}
        })
    }
    return (
        <Layout>
              <form onSubmit={joinGroupSubmitHandler}>
                   <div className="form-control">
                       <label htmlFor="username">
                                Username
                       </label>
                       <input
                        type="text"
                        value={username}
                        id="username"
                        placeholder="Enter username..."
                        onChange={e=>setUsername(e.target.value)}
                        required
                       />
                   </div>


                   <div className="form-control">
                       <label htmlFor="group">
                                Group
                       </label>
               
             
                
                       
                   
                   <select 
                        value={group}
                           id="group"
                           
                           onChange={e=>setGroup(e.target.value)}>
                        
                        <option value="JavaScript">JavaScript</option>
                        <option value="React">React</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Node">Node</option>
                        <option value="Express">Express</option>
                        <option value="MySQL">MySQL</option>
                        <option value="Mongo">Mongo</option>

                   </select>
                   </div>
                   <button type="submit" className="btn">Join Group</button>
              </form>
        </Layout>
    )
}
