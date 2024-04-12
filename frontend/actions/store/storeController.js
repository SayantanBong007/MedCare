import axios from "axios";

const base_url = "http://localhost:4000";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const API = axios.create({ baseURL: base_url, withCredentials: true });

export async function getStore() {
  try {
    const store = await axios.get(`${base_url}/api/v1/store`);
    console.log(store.data);
    return {
      result: store.data.success,
      store: store.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}

export async function getStoreDetails(id) {
  try {
    const data = await axios.get(`${base_url}/api/v1/store/${id}`);
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
