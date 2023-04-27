import React from 'react';
import { Reservation } from '../interfaces/reservation.interface';

interface MeetingRoomDetailsProps {
  roomName: string;
  reservations: Reservation[];
  onReservationCancel: (reservation: Reservation) => void;
}

export const MeetingRoomDetails: React.FC<MeetingRoomDetailsProps> = ({
  roomName,
  reservations,
  onReservationCancel,
}) => {
  const handleCancelReservation = (reservation: Reservation) => {
    onReservationCancel(reservation);
  };

  const renderReservations = () => {
    if (reservations.length === 0) {
      return <div>No reservations for this meeting room.</div>;
    }

    return reservations.map((reservation) => (
      <div key={reservation.id}>
        <p>
          Date: {reservation.startTime.toLocaleDateString()} Time: {reservation.startTime.toLocaleString()} to{' '}
          {reservation.endTime.toLocaleString()}
        </p>
        <p>
          EndDate: {reservation.endTime.toLocaleDateString()} Time: {reservation.startTime.toLocaleString()} to{' '}
          {reservation.endTime.toLocaleString()}
        </p>
        <p>Reserved by: {reservation.reservedBy}</p>
        <button onClick={() => handleCancelReservation(reservation)}>Cancel Reservation</button>
      </div>
    ));
  };

  return (
    <div>
      <h2>{roomName} Details</h2>
      {renderReservations()}
    </div>
  );
};
