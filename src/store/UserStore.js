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
    // meeting = [{
    //     // name: "",
    //     // date: DateTimePicker,
    //     name: '',
    //     email: '',
    //     appointment: '',
    //     DateTime: '',
    //     Plan:'',
    //     crown:'',
    //     fewWords: '',
    //     AmountUtilize: '',
    //     date: DateTimePicker
    // }]

    aplly=[{
        name:"",
        email:""
    }]
    constructor() {
        makeObservable(this, {
            user: observable,
            totalSubject: computed,
            updateUser: action,
            addUser: action,
            addMeeting: action,
            aplly:action
        });
    }

    addMeeting = (meeting) => {
        this.meeting.push(meeting);
        return { ...this.meeting, meeting }
    }
    // aplly(value){
    //     value.aplly=this.aplly.value;
    //     // console.log(this.aplly.value)
    // }
    // All getters behave as computed i.e. instantly calculate without action
    get totalSubject() {
        return this.userInfo;
    }

    // logUserDetails = () => {
    //     console.log(`Subject length: ${this.totalSubject()}`);
    // }

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