import axios from "axios";
import ServiceStore from "./serviceStore.js";
import serviceStore from "./serviceStore.js";

export async function AddServiceServer(data) {

    try {
        // debugger

        const AddedData = await axios.post("http://localhost:8787/service", data);
        console.log(AddedData);
        if (AddedData.status === 200) {
            alert("השירות נוסף לרשימה");
            ServiceStore.addService(data);
        }
    }
    catch (e) {
        console.log(e)
        if (e.response) {
           console.log(e)
        }
        else {
            alert('server failed');
        }
        throw e;
    }
}




export async function getServices() {

    try {
        // debugger

        const data = await axios.get("http://localhost:8787/services");
        console.log(data.status);
        if (data.status === 200) {

            serviceStore.setServices(data.data);
        }
    }
    catch (e) {
        console.log(e)
        alert('server failed');
        throw e;
    }
}
