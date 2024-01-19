import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Info from "./User_Info/Info";

import Home_Page from "./Home_Page/Home_Page";
import Booking from "./Booking/Booking";
import DeleteBooking from "./Booking/Delete_Booking";
import Payment from "./Payment/Payment";
import Rent from "./Custom_Role/roomer";
import RoomForm from "./Custom_Role/room";
import Hotel from './pages/hotel/Hotel'
import List from './pages/list/List'
import Home from "./pages/home/Home";
import Register from "./components/form/register";
import Login from "./components/form/login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home_Page/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/booking" element={ <Booking value={false} />}/>
            <Route path="/booking/admin" element={ <Booking value ={true} />}/>
            <Route path="/booking/detail/:id" element={ <DeleteBooking/>}/>
            <Route path="/booking/payment/:id" element={<Payment/>}/>
            <Route path="/booking/rent" element={<Rent/>}/>
            <Route path="/hotels/:province" element={<List />} />
            <Route path="/hotel/:id" element={<Hotel/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
