import { makeObservable, observable,action } from 'mobx';

class dataStore {
    isLogin = false;
    constructor() {
        makeObservable(this,
            {
                isLogin: observable,
                setIsLogin: action
            }
        )
    }
    setIsLogin(status) {
        this.isLogin = status;
    }
}

export default new dataStore();
