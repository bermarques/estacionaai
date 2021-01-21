import axios from "axios";

const requestUserData = async (token, userID) => {
  const BaseURL = `https://server-estaciona-ai.herokuapp.com/register/${userID}`;
  const header = { headers: { Authorization: `Bearer ${token}` } };
  let res = await axios
    .get(BaseURL, header)
    .catch((error) => error.response.data);
  return res;
};
export default requestUserData;
