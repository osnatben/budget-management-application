import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';
import { Button, Typography } from '@mui/material';
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
            addUser: action
        });
    }

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
        var res = this.user.find(d => d.name == data.user && d.pwd == data.pwd)//חיפןש במערך עובד
        if (res != undefined) {
            return 1
        }
        else { //אם לא מצא- תחפש במערך מנהל
            res = this.manager.find(d => d.name == data.user && d.pwd == data.pwd)
            if (res != undefined) {
                return 2
            }
        }
        return 0;// -משתמש חדש - לא קיים
    }
    
    
    addUser = (data) => {        
         this.user.push(...this.user,data)        
     }

     addManager = (data) => {        
        this.manager.push(...this.manager,data)        
    }

    prefetchData = () => {
        console.log('printing prefetchData...');
    }
}
export default UserStore;