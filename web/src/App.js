import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
 
function App() {
  return (
    <div>
    
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
     
    </div>
  );
}

export default App;
