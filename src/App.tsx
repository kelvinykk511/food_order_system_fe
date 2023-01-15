import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Dishes from "./pages/dishes/Dishes";
import SeatContext from './common/SeatContext';

const App: React.FC = () => {

  const [seatId, setSeatId] = useState<string>();

  return (
      <SeatContext.Provider value={{seatId, setSeatId}}>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/order"} element={<Order/>}/>
          <Route path={"/dishes"} element={<Dishes/>}/>
        </Routes>
      </SeatContext.Provider>
  )
}

export default App;
