import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Landing";
import Navbars from "./Components/Navbars";
import Cards from "./Components/Cards";
function App() {
  return (
    <div className="paddingTop">
      <Navbars />
      <Landing />
      <Cards />
  
    </div>
  );
}

export default App;
