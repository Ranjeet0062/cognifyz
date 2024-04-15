import SignIn from "./componet/SignIn"
import SignUp from "./componet/SignUp";
import Home from "./componet/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (

      <div>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Home" element={<Home />}></Route>

        </Routes>
      </div>
 
  );
}
export default App;
