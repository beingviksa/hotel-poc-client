import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import RoomContainer from "./RoomContainer";

class RoomList extends React.Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/registration" className="btn-primary">
              Back to form
            </Link>
          </Banner>
        </Hero>
        <RoomContainer
          allRooms={this.props.allRooms}
          loading={this.props.loading}
        />
      </>
    );
  }
}

export default RoomList;
