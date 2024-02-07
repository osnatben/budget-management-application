// import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';
import { Button, Typography } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { action, observable } from 'mobx';
// DEFAULT STATE

class UserStore {

    user = [{
        name: ""
        , pwd: ""
    }]
    manager = [{
        name: "osnat"
        , pwd: "7153"
    }]
    userInfo = {
        name: '',
        password: ''
    }


  
    constructor() {
        makeObservable(this, {
            user: observable,
            totalSubject: computed,
            updateUser: action,
            addUser: action,
            addMeeting: action
        });
    }

    addMeeting = (meeting) => {
        this.meeting.push(meeting);
        return { ...this.meeting, meeting }
    }
   
    get totalSubject() {
        return this.userInfo;
    }

   
    updateUser = (name) => {
        return 'NA';
    }

    chackUser = (data) => {

    }


    addUser = (data) => {
        this.user.push(...this.user, data)
    }

    addManager = (data) => {
        this.manager.push(...this.manager, data)
    }

    prefetchData = () => {
        console.log('printing prefetchData...');
    }
}
export default UserStore;