import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Info from "./User_Info/Info";

import Home_Page from "./Home_Page/Home_Page";
import Booking from "./Booking/Booking";
import DeleteBooking from "./Booking/Delete_Booking";
import Payment from "./Payment/Payment";
import Rent from "./Custom_Role/roomer";
import RoomForm from "./Custom_Role/room";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Home_Page />
            </Route>
          </Switch>
          <Switch>
            <Route path="/info" exact>
              <Info />
            </Route>
          </Switch>
          <Switch>
            <Route path="/booking" exact>
              <Booking />
            </Route>
          </Switch>
          <Switch>
            <Route path="/booking/detail">
              <DeleteBooking />
            </Route>
          </Switch>
          <Switch>
            <Route path="/booking/payment">
              <Payment />
            </Route>
          </Switch>
          <Switch>
            <Route path="/booking/rent">
              <Rent />
            </Route>
          </Switch> 
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
