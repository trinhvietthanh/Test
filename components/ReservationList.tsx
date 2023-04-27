import { Reservation } from '@/interfaces/reservation.interface';
import React from 'react'

interface ReservationListProps {
  reservations: Reservation[];
}
export function ReservationList({ reservations }: ReservationListProps) {
  return (
    <div>
      <h2>Reservations</h2>
      {reservations.length === 0 && (
        <p>No reservations found.</p>
      )}
      {reservations.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Room</th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Reserved by</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.roomId}</td>
                <td>{reservation.date.toDateString()}</td>
                <td>{reservation.startTime.toLocaleTimeString()}</td>
                <td>{reservation.endTime.toLocaleTimeString()}</td>
                <td>{reservation.reservedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReservationList