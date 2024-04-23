import Router from "./router/router.js"
import './App.css';

//components
import NavbarComp from "./components/Navbar/navbar.jsx";
import Footer from "./components/Footer/footer.jsx";  

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
