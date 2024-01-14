import { React, Component } from "react";
import MyDatePicker from "../Home_Page/clendar/clendar";
import "./SearchList.scss";
import img from "../../../src/assets/images/292129389.jpeg";

class SearchList extends Component {
  state = {
    isCalendarVisible: false,
  };

  handleClickOnShowCalendar = () => {
    this.setState({
      isCalendarVisible: !this.state.isCalendarVisible,
    });
  };

  handleClickHideCalendar = () => {
    this.setState({
      isCalendarVisible: false,
    });
  };
  render() {
    return (
      <>
        <div className="container list">
          <div className="title">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Children</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Page
                </li>
              </ol>
            </nav>
          </div>
          <div className="row body">
            <div className="col-3 search">
              <h3>Search</h3>

              <div className="form-search">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Destination</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>{" "}
                  <div class="form-group">
                    <label for="exampleInputEmail1">Check-in Date</label>
                    <div className="box-calendar form-group calendar-input">
                      {/* <i class="far fa-calendar-check"></i> */}
                      <MyDatePicker />
                      {this.state.isCalendarVisible && (
                        <div className="calendar-container"></div>
                      )}
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="colFormLabelSm"
                      class="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="colFormLabelSm"
                      class="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="colFormLabelSm"
                      class="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="colFormLabelSm"
                      class="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="colFormLabelSm"
                      class="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="col-9">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src={img} class="card-img" alt="..." />
                  </div>

                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SearchList;
