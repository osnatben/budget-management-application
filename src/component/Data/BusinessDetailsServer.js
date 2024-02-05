import axios from "axios";
import BusinessDetailsStore from "./BusinessDetailsStore";

export const BusinessDetails = async () => {
  const response = await axios.get("http://localhost:8787/businessData");
  const data = response.data;
  console.log(data);
  BusinessDetailsStore.setBusiness(data)
  console.log("businessDetails", BusinessDetailsStore.businessDetails.name);
};

export async function UpdateBusiness(meeting) {
  console.log(meeting)
  try {
    // debugger

    const Meeting = await axios.put("http://localhost:8787/businessData", meeting);
    console.log(Meeting.status);
    if (Meeting.status === 200) {
      alert("הבקשה נשלחה לאישור");

      BusinessDetailsStore.setBusiness(meeting);
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








