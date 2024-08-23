import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.avatar} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?
               <>
                <div className="greet">
                    <p><span>Hello, Dev..</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page </p>
                        <img src={assets.compass} alt="" />
                    </div>
                    <div className="card">
                        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page  </p>
                        <img src={assets.bulb} alt="" />
                    </div>
                    <div className="card">
                        <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source  </p>
                        <img src={assets.message} alt="" />
                    </div>
                    <div className="card">
                        <p>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.  </p>
                        <img src={assets.code} alt="" />
                    </div>
                </div>
               </>
            :
            <div className="result">
                <div className="result-title">
                    <img src={assets.avatar} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini} alt="" />
                    {loading
                    ?
                    <>
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    </>: 
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                   
                </div>
            </div>

        }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery} alt=""/>
                        <img src={assets.mic} alt="" />
                        <img onClick={()=>onSent()}src={assets.send} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main