import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {
  const [theme, setTheme] = useState("dark")
  let userName = "Umra"
  return (
    <div>
      
    <Navbar theme={theme} user={userName} >
      <h2>Hello Smit </h2>
      <h2>Good Evening!</h2>
    </Navbar>
    </div>
     
  )
}

export default App
