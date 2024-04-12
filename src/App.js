import { Route, Routes } from "react-router-dom";
import Bitcoin from "./components/Bitcoin";
import Asserts from "./components/Assets";
import Dashboard from "./components/Dashboard";


const App = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Dashboard} />
      <Route exact path="/btc" Component={Bitcoin} />
      <Route exact path="/asserts" Component={Asserts} />
    </Routes>
  );
}

export default App;
