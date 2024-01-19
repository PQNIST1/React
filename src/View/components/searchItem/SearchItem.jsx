import "./searchItem.css";

const SearchItem = ({ hotelId }) => {
  const handleHotelInfo = () =>{
    window.location.href = `/hotel/${hotelId._id}`;
}
  return (
    <div className="searchItem"onClick={handleHotelInfo}>
      <img
        src={hotelId.image[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{hotelId.name}</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          {hotelId.title} 
        </span>
        <span className="siFeatures">
         {/* {hotelId.extension[1].ex}  .  {hotelId.extension[0].ex} */}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{hotelId.rank}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
