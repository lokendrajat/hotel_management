import ReactDOM from 'react-dom/client';
import {  Routes, Route } from "react-router-dom";
import Features from './Component/Features';
import Home from './Component/Home';
import Showcase  from './Component/Showcase';
import Grid from './Component/Grid';
import Typography from './Component/Typography';
import MenuElement from './Component/MenuElement';
import Purchase from './Component/Purchase';
import Reservation from './Component/Reservation';



function App() {
  return (
    <div className="container-fluid">
       {/* <Home/> */}
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/features" element={<Features />} />
          <Route exact path="/showcase" element={<Showcase />} />
          <Route exact path="/grid" element={<Grid />} />
          <Route exact path="/typography" element={<Typography />} />
          <Route exact path="/menu" element={<MenuElement />} />
          <Route exact path="/reservation" element={<Reservation />} />
          <Route exact path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
