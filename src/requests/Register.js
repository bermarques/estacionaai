import axios from "axios";

const registerRequest = async (data) => {
  const BaseURL = "https://server-estaciona-ai.herokuapp.com/register";

  let res = await axios
    .post(BaseURL, data)
    .then((res) => res.status)
    .catch((error) => error.response.data);

  return res;
};

export default registerRequest;
