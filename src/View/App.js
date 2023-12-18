import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Home_Page/Header";
import Info from "./User_Info/Info"
import Booking from "./Booking/Booking";
import MyDatePicker from "./clendar/clendar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" exact>
              <Header />
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
            <Route path="/clendar" exact>
              <MyDatePicker/>
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
