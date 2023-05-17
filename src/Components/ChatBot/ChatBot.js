import React from 'react'
import ChatbotCSS from './ChatBot.module.css'
import Chatbot from '../../Assets/Vector (1).png'

const ChatBot = (props) => {
  return (
    <div className={ChatbotCSS.Chatbot} >
        <div style={{position: "relative", height: "100%"}}>
            <header className={[ChatbotCSS.chatbotHeader, 'p-3'].join(' ')}>
                <img src={Chatbot}/>
                chatbot
                <button onClick={() => props.togglefunc(!props.toggle)}>
                    x
                </button>
            </header>
            <div className={[ChatbotCSS.chatbotMain, 'p-3'].join(' ')}>
                First Message <br />
                Another Message
            </div>
            <footer className={ChatbotCSS.chatbotFooter}>
                <input placeholder='Type your message' className='p-3' />
            </footer>
        </div>        
    </div>
  )
}

export default ChatBot