import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const setLocal = ()=>{
    localStorage.setItem("cacAcces","granted")
  }

  const [acces, setacces] = useState(false)

  useEffect(() => {

    const token = localStorage.getItem("cacAcces")
    if(token){
      setacces(true)
    }
    
    
  }, [setacces])
  
  return (
    <>
    <div class="container">
        <div class="signin-form">
            <h2>Sign In</h2>
            <form >
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button onClick={(e)=>(
                  e.preventDefault(),
                  localStorage.setItem("cacAcces","granted"),
                  setTimeout(() => {
                    localStorage.removeItem("cacAcces")
                  }, 50000)
                )}>Sign In</button>
            </form>
        </div>
    </div>

    </>
  )
}

export default App
