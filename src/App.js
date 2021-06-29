import MainLayout from "./Components/Layout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="ft-app">
      <Provider store={store}>
        <Router>
          <MainLayout />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
