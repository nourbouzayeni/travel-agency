import "./App.css"
import Header from "./components/Header/Header.jsx"
import Destinations from "./components/Destinations/Destinations.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Login from "./components/Login/Login.jsx"
function App() {
  return (
    <div className="app">
      <Header />
      <Destinations />
      <Login/>
      <Footer />
    </div>
  );
}

export default App;