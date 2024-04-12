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
      store: data.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}

export async function getOrders(storeName) {
  try {
    const order = await axios.get(`${base_url}/api/v1/order`);
    console.log(order);
    return {
      result: order.data.success,
      order: order.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}
// export async function getOrders(storeName) {
//   try {
//     let url = `${base_url}/api/v1/order`;
//     if (storeName) {
//       url += `?storename=${storeName}`;
//     }
//     const order = await axios.get(url);
//     console.log("Orders response:", order.data);
//     return {
//       result: order.data.success,
//       orders: order.data.data,
//     };
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     throw new Error("Failed to fetch orders");
//   }
// }

export async function getWorker(storeName) {
  try {
    const worker = await axios.get(`${base_url}/api/v1/worker`);
    console.log(worker);
    return {
      result: worker.data.success,
      worker: worker.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}
