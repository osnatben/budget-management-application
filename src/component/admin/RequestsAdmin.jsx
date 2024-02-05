import React, { useEffect } from 'react';

import { SetMeetings, UpdateMeeting } from '../Data/MeetingServer'
import StoreMeeting from '../Data/StoreMeeting';
import { observer } from 'mobx-react-lite';
import { get } from 'mobx';

const RequestsAdmin = observer(() => {

  useEffect(() => {
    if (!StoreMeeting.meeting.length) {
      SetMeetings()
    }

  }, [])
  const updateStatus = (id, status) => {
    UpdateMeeting({id,status})

  }
  const getClasName = ( date) => {


    let color = "green";

    if (new Date().toDateString(0) === new Date(date).toDateString(0)) {
      color = 'red'
    }
    else if (new Date() > new Date(date)) {
      color = "gray"
    }
    else if (new Date().setDate(new Date().getDate() + 7) >= new Date(date)) {
      color = "orange"
    }
    

    //.toDateString())
    // if (status === 1) {
    //   color = 'green'
    // }
    // else if (status === -1) {
    //   color = 'red'
    // }
  console.log(color,date,new Date(date).toDateString(0),new Date().toDateString())
     return color
  }

  return (
    <div>RequestsAdmin
      gfghjk,{StoreMeeting.meeting.length}
      {StoreMeeting.meeting.map(x => <div className={getClasName(x.dateTime)}>{x.name}|{x.dateTime?.toString("yyyy-MM-dd")}
        <button onClick={() => updateStatus(x.id,1)}>אשר</button>
        {x.status} | {getClasName(x.dateTime)} | {x.id}|
        <button onClick={() => updateStatus(x.id,-1)}>דחה בקשה</button>
      </div>)}
    </div>
  )
}
)
export default RequestsAdmin






