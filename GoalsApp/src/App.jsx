import Footer from "./assets/components/shared/Footer"
import Header from "./assets/components/shared/Header"
import Principal from "./assets/components/shared/Principal"
import './App.css'
import List from "./assets/components/list/Lis"

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Principal><List></List></Principal>
      <Footer/>
    </div>
  )
}

export default App
