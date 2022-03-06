import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout';
import ScreenTwo from './components/ScreenTwo';


function App() {
  return (
<BrowserRouter> 
    <Routes>
      <Route exact path='/' element={<Layout title="Welcome, Huss Smith"><Home/></Layout>} />
       <Route exact path='/wallet' element={<Layout title="Wallet"><ScreenTwo /></Layout>}/> 
    </Routes> 
  </BrowserRouter> 
  );
}

export default App;
