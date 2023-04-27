export interface Reservation {
  id: string;
  roomId: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  reservedBy: string;
}
