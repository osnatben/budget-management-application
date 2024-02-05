
import { action, makeObservable, observable } from 'mobx';

class StoreMeeting {


  meeting = []

  // aplly = [{
  //   name: "",
  //   email: ""
  // }]
  constructor() {
    makeObservable(this, {

      addMeeting: action,
      meeting:observable,
      setMeeting:action
    });
  }

  addMeeting = (meeting) => {
    this.meeting = [...this.meeting, meeting]
  }
 UpdateMeeting = (meeting) => {
    const findIndex = this.meeting.findIndex(x => x.id == meeting.id)


    if (findIndex > -1) {
      const copyMeeting=[...this.meeting]
      copyMeeting[findIndex].status = meeting.status;
      this.meeting = copyMeeting
    }
  }
  setMeeting = (meetings) => {
    // this.meeting.push(meeting);
    // console.log("mmmmm");
    this.meeting =meetings
    // return { ...this.meeting, meeting }
  }
  // aplly(value){
  //     value.aplly=this.aplly.value;
  //     // console.log(this.aplly.value)
  // }
  // All getters behave as computed i.e. instantly calculate without action
  // get totalSubject() {
  //   return this.userInfo;
  // }

  // logUserDetails = () => {
  //     console.log(`Subject length: ${this.totalSubject()}`);
  // }

  // updateUser = (name) => {
  //   return 'NA';
  // }

  // chackUser = (data) => {

  // }


  // addUser = (data) => {
  //   this.user.push(...this.user, data)
  // }

  // addManager = (data) => {
  //   this.manager.push(...this.manager, data)
  // }

  // prefetchData = () => {
  //   console.log('printing prefetchData...');
  // }
}
export default new StoreMeeting();