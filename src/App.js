import MainLayout from "./Components/Layout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="ft-app">
      <Router>
        <MainLayout />
      </Router>
    </div>
  );
}

export default App;
