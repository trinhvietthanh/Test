import { AvailableTimeSlot } from "./availability.interface";
import { Reservation } from "./reservation.interface";

export interface MeetingRoom {
  id: string;
  name: string;
  capacity: number;
  reservations: Reservation[];
  availableTimeSlots: AvailableTimeSlot[];
}
