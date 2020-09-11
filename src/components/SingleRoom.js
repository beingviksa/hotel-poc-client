import React, { Component } from "react";
import { Link } from "react-router-dom";
import StyledHero from "./StyledHero";
import Banner from "./Banner";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
  };

  render() {
    const { checkin, checkout } = this.props.userData;
    const room = this.props.getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/all-rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      _id,
      roomName,
      roomDescription,
      roomCapacity,
      roomSize,
      roomPrice,
      extras,
      roomImages,
    } = room;

    return (
      <>
        <StyledHero img={roomImages[0]}>
          <Banner title={`${roomName} room`}>
            <Link to="/all-rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {roomImages.map((item, index) => {
              return <img key={index} src={item} alt={roomName} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{roomDescription}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${roomPrice}</h6>
              <h6>size: {roomSize} SQFT</h6>
              <h6>
                max-capacity:{" "}
                {roomCapacity > 1
                  ? `${roomCapacity} people`
                  : `${roomCapacity} person`}
              </h6>
            </article>

            <Link to="/room-booked">
              <button
                onClick={() => this.props.bookRoom(checkin, checkout, _id)}
              >
                Book Now
              </button>
            </Link>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
