import Footer from "./assets/components/shared/Footer"
import Header from "./assets/components/shared/Header"
import Principal from "./assets/components/shared/Principal"
import './App.css'
import List from "./assets/components/list/Lis"
import Details from "./assets/components/new/details"

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Principal>
        {/* <List></List> */}
        <Details></Details>
      </Principal>
      <Footer />
    </div>
  )
}

export default App
