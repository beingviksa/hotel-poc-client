import React from "react";
import { Link } from "react-router-dom";

function RoomReceipt({ userData, formDataAfterBook }) {
  const { firstname, lastname, email, checkin, checkout } = userData;

  const checkinDate = new Date(`"${checkin}"`);
  const checkoutDate = new Date(`"${checkout}"`);
  return (
    <div className="room-receipt">
      <div className="container">
        <h2>Thanks for the room booking</h2>
        <table>
          <tr>
            <td>Name</td>
            <td style={{ textTransform: "capitalize" }}>
              {firstname} {lastname}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Check In</td>
            <td>{checkinDate.toDateString()}</td>
          </tr>
          <tr>
            <td>Check Out</td>
            <td>{checkoutDate.toDateString()}</td>
          </tr>
        </table>
        <Link
          to="/"
          className="btn-primary"
          onClick={() => formDataAfterBook()}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RoomReceipt;
