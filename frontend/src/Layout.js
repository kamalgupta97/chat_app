import React from 'react'
const Layout = (props) => {
    return (
        <div className="chat-container">
            <header className="chat-header">
           
                <h1>Masai</h1>
            </header>
            <main className="chat-main">
                {props.children}
            </main>
        
            
        </div>
    )
}

export default Layout;