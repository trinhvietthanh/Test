import { MeetingRoom } from "@/interfaces/room.interface";

export const meetingRooms: MeetingRoom[] = [
  {
    id: "1",
    name: "Room 1",
    capacity: 10,
    reservations: [],
    availableTimeSlots: [
      {
        startTime: new Date("2023-05-12T09:00:00"),
        endTime: new Date("2023-05-15T10:00:00"),
      },
      {
        startTime: new Date("2023-06-12T11:00:00"),
        endTime: new Date("2023-06-15T12:00:00"),
      },
    ],
  },
  {
    id: "2",
    name: "Room 2",
    capacity: 15,
    reservations: [],
    availableTimeSlots: [
      {
        startTime: new Date("2023-03-02T10:00:00"),
        endTime: new Date("2023-03-05T11:00:00"),
      },
      {
        startTime: new Date("2023-04-01T12:00:00"),
        endTime: new Date("2023-04-03T13:00:00"),
      },
    ],
  },

  {
    id: "3",
    name: "Room 3",
    capacity: 2,
    reservations: [],
    availableTimeSlots: [
      {
        startTime: new Date("2023-03-02T10:00:00"),
        endTime: new Date("2023-03-05T11:00:00"),
      },
      {
        startTime: new Date("2023-04-01T12:00:00"),
        endTime: new Date("2023-04-03T13:00:00"),
      },
    ],
  },
];
