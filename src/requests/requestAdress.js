import axios from "axios";

export const requestAddress = async (data, endPoint) => {
  const BaseURL = `https://server-estaciona-ai.herokuapp.com/${endPoint}`;
  let res = await axios
    .post(BaseURL, data)
    .catch((error) => error.response.data);
  return res;
};

export const getAddress = async (token) => {
  const BaseURL = `https://server-estaciona-ai.herokuapp.com/address`;
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  let res = await axios
    .get(BaseURL, headers)
    .catch((error) => error.response.data);
  return res;
};
