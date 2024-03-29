import './only.css'
export default function PaymentHeader() {
  const myStyle = {
    textAlign: 'right'
  };
  const handleHome = () =>{
    window.location.href ='/'
  }
    return (
        <div className="header-top row">
        <div className="col-2"></div>
        <div className="header-top-left col-2">
          <span className="font-weight-bolder p-2" onClick={handleHome}>Booking.com</span>
        </div>
        <div className="col-6" style={myStyle}>
        <i class="fas fa-question-circle"></i>
        </div>
      </div>
    )
}