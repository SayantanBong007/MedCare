import axios from "axios";

const base_url = "http://localhost:4000";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const API = axios.create({ baseURL: base_url, withCredentials: true });

API.interceptors.request.use((req) => {
  const item = localStorage.getItem("user_info");
  if (item) {
    const userInfo = JSON.parse(item);
    req.headers.Authorization = `Bearer ${userInfo.token}`;
  }
  return req;
});

export async function register(user) {
  try {
    const rUser = await axios.post(`${base_url}/api/v1/user/register`, user);
    console.log(rUser);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    // Store access token in a cookie
    document.cookie = `refreshToken=${
      rUser.data.data.refreshToken
    }; expires=${expirationDate.toUTCString()}; path=/`;
    // Store refresh token in a cookie
    document.cookie = `accessToken=${
      rUser.data.data.accessToken
    }; expires=${expirationDate.toUTCString()}; path=/`;
    return {
      success: rUser.data.success,
      user: rUser.data.data,
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

export async function login(user) {
  try {
    const lUser = await axios.post(`${base_url}/api/v1/user/login`, user);
    console.log("user", lUser);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    // Store access token in a cookie
    document.cookie = `refreshToken=${
      lUser.data.data.refreshToken
    }; expires=${expirationDate.toUTCString()}; path=/`;
    // Store refresh token in a cookie
    document.cookie = `accessToken=${
      lUser.data.data.accessToken
    }; expires=${expirationDate.toUTCString()}; path=/`;
    return {
      success: lUser.data.success,
      user: lUser.data.data,
      message: "Login Success ",
    };
  } catch (error) {
    console.log(error);
    return { result: false, message: "Login Failed" };
  }
}

export async function logout() {
  try {
    const { data } = await axios.get(`${base_url}/api/v1/logout`, config);
    console.log(data.success);
    return data.success;
  } catch (error) {
    console.log(error);
  }
}

export async function updateDocuments(url) {
  try {
    console.log(url);
    const { data } = await axios.patch(
      `${base_url}/api/v1/documents`,
      { url },
      config
    );
    return { result: data.success, message: "Document added" };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}

export async function getDocuments() {
  try {
    const { data } = await axios.get(`${base_url}/api/v1/documents`, config);
    return {
      result: data.success,
      documents: data.documents,
      message: "Document added",
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}

export async function getUser() {
  try {
    const user = await axios.get(
      `${base_url}/api/v1/user/current-user`,
      config
    );
    console.log(user);
    return {
      result: user.data.success,
      user: user.data.data,
    };
  } catch (error) {
    console.log(error);
    return {
      result: false,
    };
  }
}
