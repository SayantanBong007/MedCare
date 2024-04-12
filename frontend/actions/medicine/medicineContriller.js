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

export async function OrderRegister(medicine) {
  try {
    const rMed = await axios.post(`${base_url}/api/v1/order`, medicine);
    console.log(rMed);

    return {
      success: rMed.data.success,
      ordermedicine: rMed.data.data,
      message: "Registration Success ",
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
      message:
        "Registration Failed, account already exist with the given email ",
    };
  }
}

const medicine = "";
export async function getReview(medicine) {
  console.log(medicine);
  try {
    const rev = await axios.get(`${base_url}/api/v1/review`, {
      params: { medicine },
    });
    console.log(rev);
    return {
      success: rev.data.success,
      review: rev.data.data,
      message: "success",
    };
  } catch (err) {
    console.log(err);
    return {
      result: false,
      message: "some error",
    };
  }
}

export async function postReview(review) {
  console.log(review);
  try {
    const rev = axios.post(`${base_url}/api/v1/review`, review);
    return {
      success: rev.data.success,
      review: rev.data.data,
      message: "success",
    };
  } catch (err) {
    return {
      result: false,
      message:
        "Registration Failed, account already exist with the given email ",
    };
  }
}
