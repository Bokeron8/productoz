import "./styles/main.css"
import Header from "./Header"
import Footer from "./Footer"
import Product from "./Product"

function App() {

  return (
    <>
      <Header></Header>
      <div className="items">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
