import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Hero hero="roomsHero">
          <Banner title="Book your stay with us">
            <Link to="/registration" className="btn-primary">
              Regiser Now
            </Link>
          </Banner>
        </Hero>
      </div>
    );
  }
}

export default Home;
