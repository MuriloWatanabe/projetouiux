import Router from "./router/router.js"
import './App.css';

//components
import Navbar from "./components/Navbar/navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
