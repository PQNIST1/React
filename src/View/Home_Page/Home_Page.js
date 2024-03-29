import React, { Component } from "react";
import Header from "./Header";
import './home_page.css'
import Home_Child1 from "./Home_Child1";
import Home_Child2 from "./Home_Child2";
import Home_Child3 from "./Home_Child3";
import Home_Child4 from "./Home_Child4";
import Home_Child5 from "./Home_Child5";
import Home_Child6 from "./Home_Child6";
import Home_Child7 from "./Home_Child7";
import Footer from "../components/footer/Footer";
import MailList from "../components/mailList/MailList";
class Home_Page extends Component {
  render() {
    return (
      <>
        <Header />
        <Home_Child1 />
        <Home_Child2 />
        <Home_Child3 />
        <Home_Child4 />
        <Home_Child5 />
        <Home_Child6 />
        <Home_Child7 />
        <MailList/>
        <div class="footer-custom">
        <Footer/>
        </div>
      </>
    );
  }
}

export default Home_Page;
