import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000",
});

class Api {
  postLoginData = async (addedurl, item) => {
    let data = await api.post(addedurl, item).then((response) => response);
    console.log(data);
    return data;
  };

  postData = async (addedurl, item) => {
    const token = await localStorage.getItem("token");
    console.log(token);
    console.log(item);
    let requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "Application/json",
      },
    };

    let data = await api
      .post(addedurl, item, requestOptions)
      .then((response) => response);
    console.log(data);
    return data;
  };

  getData = async (addedurl, item) => {
    const token = await localStorage.getItem("token");
    let requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "Application/json",
      },
     
    };
    let data = await api
      .get(addedurl, requestOptions, item)
      .then((response) => response);

    return data;
  };

  getUnauthenticatedData = async (addedurl, item) => {
    let data = await api.get(addedurl, item).then((response) => response);
    return data;
  };

  deleteData = async (addedurl) => {
    const token = await localStorage.getItem("token");
    let requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "Application/json",
      },
    };
    let data = await api
      .delete(addedurl, requestOptions)
      .then((response) => response);

    return data;
  };
}
export default Api;