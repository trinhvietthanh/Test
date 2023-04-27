import React, { useState } from 'react';
import {MeetingRoom} from '../interfaces/room.interface';
import Link from 'next/link';

interface MeetingRoomsListProps {
  meetingRooms: MeetingRoom[];
}

export const MeetingRoomsList: React.FC<MeetingRoomsListProps> = ({ meetingRooms }) => {
  const [capacity, setCapacity] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCapacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(parseInt(event.target.value));
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const filterMeetingRooms = () => {
    return meetingRooms.filter((room) => {
      const availableTimeSlots = room.availableTimeSlots;
      
      const selectedStartDate = startDate ? new Date(startDate) : null;
      const selectedEndDate = endDate ? new Date(endDate) : null;
      console.log(selectedStartDate);
      console.log(">>>>", availableTimeSlots[0].startTime)
      if (selectedStartDate && selectedEndDate) {
        return (
          room.capacity >= capacity &&
          availableTimeSlots.some(
            (slot) =>
              selectedStartDate >= slot.startTime && selectedEndDate <= slot.endTime
          )
        );
      } else {
        return room;
      }
     
    });
  };

  const renderMeetingRooms = () => {
    const filteredMeetingRooms = filterMeetingRooms();
    if (filteredMeetingRooms.length === 0) {
      return <div>No available meeting rooms for the selected time period and capacity.</div>;
    }

    return filteredMeetingRooms.map((room) => (
      <div key={room.id}>
        <Link href={`/room-detail/{room.id}`}>
          <h3>{room.name}</h3>
        </Link>
        <p>Capacity: {room.capacity}</p>
        <p>
          Available time slots:
          {room.availableTimeSlots.map((slot, index) => (
            <span key={index}>
              {slot.startTime.toLocaleString()} to {slot.endTime.toLocaleString()}
              {index < room.availableTimeSlots.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Available Meeting Rooms</h2>
      <div>
        <label>Capacity:</label>
        <input type="number" value={capacity} onChange={handleCapacityChange} />
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </div>
      <div>{renderMeetingRooms()}</div>
    </div>
  );
};