// import axios from "axios";
// import dataStore from "./DataStore.jsx";
// // import { Grid } from "@mui/material";
// import Grid from '../Grid.jsx'
// import Admin from "../admin/Admin.jsx";
// import User from "../user/User.jsx";

// export async function AddUser(name, password) {

//     try {
//         // debugger
//         const addUser = await axios.put("http://localhost:8787/login", {
//             name,
//             password
//         });

//         if (addUser.status === 200) { 
//             alert("you sifn up successfuly");
//             // const resData = isValid.data;
//             // console.log("resdata", resData)
//             // resData === 1 ? <Admin></Admin> : resData === 2 ? <User></User> : <SignUp></SignUp>

//             dataStore.setIsLogin(true);
//         }
//     }
//     catch (e) {
//         if (e.response) {
//             alert('user name or password not correct');
//         }
//         else {
//             alert('server failed');
//         }
//     }
// }
// export default AddUser;