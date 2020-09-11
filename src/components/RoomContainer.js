import React from "react";
import Room from "./Room";
import Loading from "./Loading";

function RoomContainer(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {props.allRooms.map((room) => {
          return <Room key={room._id} room={room} />;
        })}
      </div>
    </section>
  );
}

export default RoomContainer;
