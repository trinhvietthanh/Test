import React from 'react';
import { Reservation } from '../interfaces/reservation.interface';

interface ReservationDetailsProps {
  reservation: Reservation;
  onCancel: () => void;
}

export const ReservationDetails: React.FC<ReservationDetailsProps> = ({ reservation, onCancel }) => {
  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <div>
      <h2>Reservation Details</h2>
      <p>Date: {reservation.endTime.toLocaleDateString()}</p>
      <p>Time: {reservation.startTime.toLocaleString()} to {reservation.endTime.toLocaleString()}</p>
      <p>Room: {reservation.id}</p>
      <p>Reserved by: {reservation.reservedBy}</p>
      <button onClick={handleCancelClick}>Cancel Reservation</button>
    </div>
  );
};
