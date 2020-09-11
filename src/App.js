import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HotelForm from "./components/HotelForm";
import axios from "axios";
import RoomList from "./components/RoomList";
import SingleRoom from "./components/SingleRoom";
import RoomReceipt from "./components/RoomReceipt";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    availableRooms: [],
    loading: false,
    room: {},
    user: {},
  };

  // search rooms based on checkIn and checkOut
  searchRooms = async (checkIn, checkOut) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://localhost:3000/availablerooms/${checkIn}/${checkOut}`
    );
    this.setState({
      availableRooms: res.data,
      loading: false,
    });
  };

  getRoom = (slug) => {
    let tempRooms = [...this.state.availableRooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  // Book room
  bookRoom = async (checkIn, checkOut, id) => {
    const res = await axios.put(
      `http://localhost:3000/room-book/${checkIn}/${checkOut}/${id}`
    );

    return res.data;
  };

  // get current user data
  userData = (data) => {
    this.setState({
      user: data,
    });
  };

  // Empty the form fields
  formDataAfterBook = () => {
    this.setState({
      user: {},
    });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/registration"
            exact
            render={(props) => (
              <HotelForm
                {...props}
                searchRooms={this.searchRooms}
                userData={this.userData}
                formData={this.state.user}
              />
            )}
          />
          <Route
            path="/all-rooms"
            render={(props) => (
              <RoomList
                {...props}
                allRooms={this.state.availableRooms}
                loading={this.state.loading}
              />
            )}
          />
          <Route
            path="/rooms/:slug"
            render={(props) => (
              <SingleRoom
                {...props}
                getRoom={this.getRoom}
                loading={this.state.loading}
                bookRoom={this.bookRoom}
                userData={this.state.user}
              />
            )}
          />
          <Route
            path="/room-booked"
            render={(props) => (
              <RoomReceipt
                {...props}
                userData={this.state.user}
                formDataAfterBook={this.formDataAfterBook}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
