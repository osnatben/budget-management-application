import React, { useEffect } from 'react';
import { SetMeetings, UpdateMeeting } from '../Data/MeetingServer'
import StoreMeeting from '../Data/StoreMeeting';
import { observer } from 'mobx-react-lite';

const RequestsAdmin = observer(() => {

  useEffect(() => {
    if (!StoreMeeting.meeting.length) {
      SetMeetings()
    }

  }, [])
  const updateStatus = (id, status) => {
    UpdateMeeting({ id, status })

  }
  const getClasName = (status) => {
    console.log(status, "status")
    let color = "orange";
    //צבעים לפי תאריך
    // if (new Date().toDateString(0) === new Date(date).toDateString(0)) {
    //   color = 'red'
    // }
    // else if (new Date() > new Date(date)) {
    //   color = "gray"
    // }
    // else if (new Date().setDate(new Date().getDate() + 7) >= new Date(date)) {
    //   color = "orange"
    // }

    //.toDateString())

    if (status === 1) {
      color = 'green'
    }
    else if (status === -1) {
      color = 'red'
    }
    return color
  }
  const getTime = (dateTime) => {
    const date = new Date(dateTime);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
    return formattedDate;
  }


  return (
    <div>מספר הבקשות הממתינות לאישור:
      {StoreMeeting.meeting.length}
   
      {StoreMeeting.meeting.filter(x => new Date(x.dateTime) > new Date()).sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)).map(x => <div className={getClasName(x.status)}>{ getTime(x.dateTime)}

       | {x.status == 1 ? 'מאושר' : x.status == -1 ? 'סורב' : " מחכה לאישור"} |
         מספר בקשה:{x.id}   |  מגיש הבקשה:{x.name} | 
        <button onClick={() => updateStatus(x.id, -1)}>דחה בקשה</button>
        <button onClick={() => updateStatus(x.id, 1)}>אשר</button>
      </div>)}
    </div>
  )
}
)
export default RequestsAdmin
