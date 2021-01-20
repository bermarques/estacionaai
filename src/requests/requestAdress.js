import axios from "axios";

export const requestAddress = async (data, token) => {
  const BaseURL = `https://server-estaciona-ai.herokuapp.com/address`;
  const header = { headers: { Authorization: `Bearer ${token}` } };
  let res = await axios
    .post(BaseURL, data, header)
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
