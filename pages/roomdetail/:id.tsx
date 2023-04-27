import React from 'react'
import { MeetingRoomDetails } from '@/components/MeetingRoomDetails'
import { useRouter } from 'next/router'
type Props = {}

const RoomDetail = (props: Props) => {

  const router = useRouter();
  const room = router.query;
  console.log(room);
  const roomName = "Room 1";
  const test = [{
    id: 1,
    roomID: 2,
    startTime: new Date("2023/12/04"),
    endTime: new Date("2023/12/05"),
    reservedBy: [],
  }];

  const onCancel = () => {
    console.log("ok")
  }
  return (
    <MeetingRoomDetails roomName={roomName} reservations={test} onReservationCancel={onCancel} />
  )
}

export default RoomDetail