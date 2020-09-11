import React from "react";

class HotelForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    checkin: "",
    checkout: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchRooms(this.state.checkin, this.state.checkout);
    this.props.userData(this.state);
    this.props.history.push("/all-rooms");
  };

  componentDidMount() {
    if (!this.state.formData) {
      if (
        this.state.firstname |
        this.state.lastname |
        this.state.email |
        this.state.checkin |
        (this.state.checkout === "")
      ) {
        this.setState({
          firstname: this.props.formData.firstname,
          lastname: this.props.formData.lastname,
          email: this.props.formData.email,
          checkin: this.props.formData.checkin,
          checkout: this.props.formData.checkout,
        });
      }
    }
  }

  render() {
    return (
      <div className="landing-page">
        <form onSubmit={this.handleSubmit}>
          <h2>Register Here</h2>
          <div className="input-box">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter First Name"
              required
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              required
              placeholder="Enter Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="from">Check In</label>
            <input
              id="checkin"
              name="checkin"
              type="date"
              required
              value={this.state.checkin}
              onChange={this.handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="to">Check Out</label>
            <input
              id="checkout"
              name="checkout"
              type="date"
              required
              value={this.state.checkout}
              onChange={this.handleChange}
            />
          </div>
          <input className="btn" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default HotelForm;
