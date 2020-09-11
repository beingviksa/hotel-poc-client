import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Room extends React.Component {
  render() {
    const { roomImages, roomPrice, slug, roomName } = this.props.room;
    return (
      <article className="room">
        <div className="img-container">
          <img src={roomImages[0]} alt="room" />
          <div className="price-top">
            <h6>${roomPrice}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">{roomName}</p>
      </article>
    );
  }
}

export default withRouter(Room);
