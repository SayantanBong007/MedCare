import axios from "axios";

const base_url = "http://localhost:4000";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const API = axios.create({ baseURL: base_url, withCredentials: true });

export async function getMedicine() {
  try {
    const med = await axios.get(`${base_url}/api/v1/medicine`);

    // console.log(med);
    return {
      result: med.data.success,
      medicine: med.data.data,
      message: "Medicine Added",
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}

export async function getMedicineDetails(id) {
  try {
    const data = await axios.get(`${base_url}/api/v1/medicine/${id}`);
    return {
      result: data.data.success,
      spmed: data.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}
