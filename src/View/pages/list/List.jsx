import "./list.css";
// import Navbar from "../../components/navbar/Navbar";
// import Header from "../../components/header/Header";
import Header from "../../Only_Header/custom_Header";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const { province } = useParams();
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const initialDestination = location.state?.destination || "";
  const initialDate = location.state?.date || [{ startDate: new Date(), endDate: new Date() }];
  const initialOptions = location.state?.options || { adult: 1, children: 0, room: 1 };
  const [destination, setDestination] = useState(initialDestination);
  const [date, setDate] = useState(initialDate);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    // GET request to fetch all hotels
    axios.get('http://localhost:8000/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error.message);
      });
  }, []); 
  const filteredHotels = province? hotels.filter((hotel) => hotel.address.province === province): hotels;

  const shouldDisplayContent = filteredHotels.length > 0;

  
  return (
    <div>
      <Header/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
                      {shouldDisplayContent ? (
              filteredHotels.map((hotel) => (
                <SearchItem key={hotel._id} hotelId={hotel} />
              ))
            ) : (
              <div>
                {filteredHotels.length === 0 && <div>Không có khách sạn nào ở: {province}</div>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List; 
