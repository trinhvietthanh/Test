import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { MeetingRoomsList } from '@/components/MeetingRoomsList'
import { meetingRooms } from "@/mock/room";


export default function Home() {
  const rooms = meetingRooms; 
  return(
    <>
      <MeetingRoomsList meetingRooms={rooms}/>
    </>
  )
  
}
