import axios from "axios";
import dataStore from "./DataStore.js";

export async function CheckLogin(name, password) {
    try {
        // debugger
        const isValid = await axios.post("http://localhost:8787/login", {
            name,
            password
        });

        if (isValid.status === 200) { 
            const resData = isValid.data;
            dataStore.setIsLogin(true);
            console.log("resdata", resData) 

      return resData
            // <SignUp></SignUp></Admin>

            
        }
    }
    catch (e) {
        if (e.response) {
            alert('user name or password not correct');
        }
        else {
            alert('server failed');
        }
    }
}
export default CheckLogin;