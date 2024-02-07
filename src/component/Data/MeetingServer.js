import axios from "axios";
import dataStore from "./DataStore.js";
// import { Grid } from "@mui/material";
import Grid from '../Grid.jsx'
import Admin from "../admin/Admin.jsx";
import User from "../user/User.jsx";
import StoreMeeting from "./StoreMeeting.js";

export async function AddMeeting(meeting) {

    try {
        // debugger

        const addMeeting = await axios.post("http://localhost:8787/appointment", meeting);
        console.log(addMeeting);
        if (addMeeting.status === 200) {
            alert("הבקשה נשלחה לאישור");
            StoreMeeting.addMeeting(addMeeting.data);
        }
    }
    catch (e) {
        console.log(e)
        if (e.response) {
            alert('התאריך תפוס');
        }
        else {
            alert('server failed');
        }
        throw e;
    }
}

export async function UpdateMeeting(meeting) {
console.log(meeting)
    try {
        // debugger

        const Meeting = await axios.put("http://localhost:8787/appointment", meeting);
        console.log(Meeting.status);
        if (Meeting.status === 200) {
            // alert("העדכון בוצע בהצלחה");

            StoreMeeting.UpdateMeeting(meeting);

        }
    }

    catch (e) {
        console.log(e)
        if (e.response) {
            alert('אין נתונים');
        }
        else {
            alert('server failed');
        }
        throw e;
    }
}





export async function SetMeetings() {

    try {
        // debugger

        const Meetings = await axios.get("http://localhost:8787/appointments");
        console.log(Meetings.status);
        if (Meetings.status === 200) {

            StoreMeeting.setMeeting(Meetings.data);
        }
    }
    catch (e) {
        console.log(e)
        alert('server failed');
        throw e;
    }
}
