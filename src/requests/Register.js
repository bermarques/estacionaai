import axios from "axios";

const requestUser = async (data, endPoint) => {
  const BaseURL = `https://server-estaciona-ai.herokuapp.com/${endPoint}`;
  let res = await axios
    .post(BaseURL, data)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
      }
    })
    .catch((error) => error.response.data);
  return res;
};
export default requestUser;
